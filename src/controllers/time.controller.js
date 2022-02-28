import Time from "../models/time";
import Mark from "../models/mark";
export const createTime = async (req, res) => {
  const { start_date, end_date, duration, marks } = req.body;

  const durationSec =
    duration.h * 60 * 60 + duration.m * 60 + duration.s + duration.ms / 100;

  try {
    const newTime = await Time.create({
      start_date: start_date,
      end_date: end_date,
      duration: durationSec.toFixed(3),
    });

    if (!newTime)
      return res.status(500).json({ message: "Somethign goes wrong" });
    const markIdtime = marks.map((m) =>
      Object.assign({}, m, { time_id: newTime.id })
    );

    const newsMarks = await Mark.bulkCreate(markIdtime, {
      returning: ['id"', "start_date", "end_date", "time_id"],
    });

    return res
      .status(200)
      .json({ message: "Time created successfully", data: newTime });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Somethign goes wrong" });
  }
};

export const getTimes = async (req, res) => {
  const times = await Time.findAll();
  res.status(201).json(times);
};
