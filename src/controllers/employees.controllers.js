import { pool } from "../db.js";
//
export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * from employee");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Algo salio mal", error: error.message });
  }
};
//
export const getEmployee = async (req, res) => {
  try {
    // throw new error('My errorroror')
    const [rows] = await pool.query("SELECT * from employee where id=?", [
      req.params.id,
    ]);
    if (rows.length < 1) {
      return res
        .status(404)
        .json({ message: "No se obtuvieron resultados para la consulta" });
    }
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Algo salio mal", error: error.message });
  }
};
//
export const createEmployee = async (req, res) => {
  try {
    const { name, salary } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO employee (name, salary) VALUES(?,?)",
      [name, salary]
    );
    // console.log( req.body );
    // res.send(rows);
    res.send({
      id: rows.insertId,
      name,
      salary,
    });
    // res.send('Registro exitoso')
  } catch (error) {
    res.status(500).json({ message: "Algo salio mal", error: error.message });
  }
};
//
export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;
  // console.log(id, name, salary);
  try {
    const [result] = await pool.query(
      "update employee set name = ifnull(?, name), salary=ifnull(?, salary) where id=?",
      [name, salary, id]
    );
    if (result.affectedRows < 1) {
      return res
        .status(404)
        .json({ message: "No se obtuvieron resultados para la consulta" });
    }
    const [rows] = await pool.query("SELECT * from employee where id=?", [id]);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Algo salio mal", error: error.message });
  }
  // res.json({'message': 'Recibido'})
};
//
export const deleteEmployee = async (req, res) => {
  const [result] = await pool.query("Delete from employee where id=?", [
    req.params.id,
  ]);
  if (result.affectedRows < 1) {
    return res
      .status(404)
      .json({ message: "No se obtuvieron resultados para la consulta" });
  }
  res.sendStatus(204);
};
