module.exports = (req, res) => {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;
        console.log('Contact message received:', { name, email, message });
        
        return res.status(200).json({ 
            success: true, 
            message: 'Message sent! Vaithya (8270428389) will reach out to you shortly.',
            contact: {
                name: 'Vaithya',
                email: 'vaithya12@gmail.com',
                phone: '8270428389'
            }
        });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
