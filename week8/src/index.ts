import express from 'express';
import  { prisma }  from '../lib/prisma'; 

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// เพิ่ม '/' ด้านหน้า และเติมคำว่า async
app.post('/api/books', async (req, res) => {
    const { title, author, description, price } = req.body;
    try {
        const book = await prisma.book.create({
            data: {
                title,
                author,
                description,
                price,
            },
        });
        res.status(201).json(book);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create book' });
    } // ปิด block ของ catch
}); // ปิด block ของ app.post

// เพิ่ม app.listen เพื่อให้ Server เปิดทำงานรอรับ Request
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});