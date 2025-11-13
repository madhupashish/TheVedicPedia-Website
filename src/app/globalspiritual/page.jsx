const GlobalSpiritualBharat = () => {
    return (
        <div className="bg-[#EDE6D6] text-[#411900] py-24 w-full">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-[#411900] mb-2">Global Spiritual Bharat</h1>
                    <p className="text-base font-medium text-[#411900] max-w-2xl mx-auto">
                        Explore the spiritual essence of Bharat through our curated resources and teachings rooted in Vedic wisdom.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center mb-16">
                    <h3 className="text-2xl font-semibold text-[#FF5E03] mb-4">Download Our Spiritual Document</h3>
                    <p className="text-base font-medium text-[#411900] max-w-lg text-center mb-6">
                        Access the detailed insights and teachings of Global Spiritual Bharat in our comprehensive document.
                    </p>
                    <a
                        href="/documents/spiritual-bharat.docx"
                        download
                        className="bg-[#FF5E03] text-white px-7 py-2 text-base rounded-full hover:bg-[#e05503] transition-colors"
                    >
                        Download Document
                    </a>
                </div>

                <div className="text-center">
                    <p className="text-base font-medium text-[#411900] max-w-4xl mx-auto mb-6">
                        Join us on this journey to rediscover the divine vibrations of Bharat’s ancient wisdom. Stay tuned for more updates and resources.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GlobalSpiritualBharat;