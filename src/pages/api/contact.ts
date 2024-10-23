const tempStoreage = [];
export default function handler(req, res) {
  if (req.method === "POST") {
    const { data } = req.body;

    if (!data) {
      return res.status(400).json({ message: "Data is required" });
    }

    const { name, email, message } = data;
    tempStoreage.push({ name, email, message });
    res.status(200).json({ message: "Message received" });
  } else {
    // Handle other HTTP methods
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
