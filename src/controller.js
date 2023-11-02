import { pool } from "./database.js";

class LibroController {
  async getAll(req, res) {
    const [result] = await pool.query("SELECT * FROM libros");
    res.json(result);
  }

  async getOne(req, res) {
    const libroId = req.params.id; // el ID se pasa como un parámetro en la URL

    try {
      const [result] = await pool.query("SELECT * FROM libros WHERE id = ?", [
        libroId,
      ]);

      if (result.length === 0) {
        res.status(404).json({ error: "Libro no encontrado" });
      } else {
        res.json(result[0]); // Devuelve el primer libro encontrado
      }
    } catch (error) {
      console.error("Error al obtener el libro:", error);
      res.status(500).json({ error: "Error al obtener el libro" });
    }
  }

  // eliminar libro

  async delete(req, res) {
    const isbn = req.body.isbn;

    // Validación de datos
    if (!isbn) {
      return res.status(400).json({
        error: "El ISBN del libro es obligatorio para la eliminación",
      });
    }

    try {
      // Ejecuta una consulta SQL para eliminar el libro con el ISBN proporcionado
      const [result] = await pool.query("DELETE FROM libros WHERE isbn = ?", [
        isbn,
      ]);

      // se verifica si se eliminó algún registro
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Libro no encontrado" });
      }

      res.json({ message: "Libro eliminado con éxito" });
    } catch (error) {
      console.error("Error al eliminar el libro:", error);
      res.status(500).json({ error: "Error al eliminar el libro" });
    }
  }

  //Actualizar un libro

  async update(req, res) {
    const isbn = req.params.isbn;
    const datosActualizados = req.body;

    // Validación de datos (puedes agregar validaciones según tus necesidades)
    if (!isbn) {
      return res.status(400).json({
        error: "El ISBN del libro es obligatorio para la actualización",
      });
    }

    try {
      // Construye una consulta SQL para actualizar el libro con el isbn proporcionado
      const query =
        "UPDATE libros SET nombre = ?, autor = ?, categoria = ?, añopublicacion = ? WHERE isbn = ?";
      const values = [
        datosActualizados.nombre,
        datosActualizados.autor,
        datosActualizados.categoria,
        datosActualizados.añopublicacion,
        isbn,
      ];

      // Ejecuta la consulta SQL para actualizar el libro
      const [result] = await pool.query(query, values);

      // Verifica si se actualizó algún registro
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Libro no encontrado" });
      }

      // Éxito: libro actualizado
      res.json({ message: "Libro actualizado con éxito" });
    } catch (error) {
      //Error al actualizar
      console.error("Error al actualizar el libro:", error);
      res.status(500).json({ error: "Error al actualizar el libro" });
    }
  }

  // try catch

  async add(req, res) {
    try {
      const libro = req.body;

      if (
        !libro.nombre ||
        !libro.autor ||
        !libro.categoria ||
        !libro.añopublicacion ||
        !libro.isbn
      ) {
        throw new Error("Faltan atributos obligatorios en el libro");
      }

      const [result] = await pool.query(
        `INSERT INTO libros(nombre, autor, categoria, añopublicacion, isbn) VALUES (?, ?, ?, ?, ?)`,
        [
          libro.nombre,
          libro.autor,
          libro.categoria,
          libro.añopublicacion,
          libro.isbn,
        ]
      );

      res.json({ "Id insertado": result.insertId });
    } catch (error) {
      console.error("Error al agregar el libro:", error);
      res.status(400).json({ error: error.message });
    }
  }
}

export const libro = new LibroController();
