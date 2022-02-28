import Mark from "../models/mark";

export const getMarksByIdTime = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  console.log(id);
  try {
    const marks = await Mark.findAll({
      attributes: ["start_date", "end_date", "time_id"],
      where: {
        time_id: id,
      },
    });
    res.status(201).json(marks);
  } catch (error) {
    console.log(error);
  }
};
