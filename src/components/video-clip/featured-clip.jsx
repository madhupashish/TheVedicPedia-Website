'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Copy } from "lucide-react";

const videoLinks = [
    "https://youtu.be/_32sYBQyDU4?si=4qlV4yYNbJ4hMy-r",
    "https://youtu.be/poNa49kApEQ?si=Tbe6PVitIErxE-a5",
    "https://youtu.be/Ug-mw8sCK0o?si=loOsNfp5ecKeWBno",
    "https://youtube.com/watch?v=WVNwTnsTR_Y&feature=shared",
    "https://youtube.com/watch?v=jqr3nmrNGwg&feature=shared",
    "https://youtube.com/watch?v=WPAcNHhCKDc&feature=shared",
];

const getYouTubeVideoId = (url) => {
    const regex = /(?:v=|\/)([0-9A-Za-z_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
};

const VideoClip = () => {
    const [copiedLink, setCopiedLink] = useState(null);

    const handleCopyLink = (link) => {
        navigator.clipboard.writeText(link).then(() => {
            setCopiedLink(link);
            setTimeout(() => setCopiedLink(null), 2000);
        });
    };

    return (
        <div className="bg-orange-400 w-full p-6 rounded-lg">
            <div className="w-[95%] mx-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">Our Featured Videos</h2>
                </div>
                <Carousel className="w-full">
                    <CarouselContent>
                        {videoLinks.map((link, index) => {
                            const videoId = getYouTubeVideoId(link);
                            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

                            return (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                            <img
                                                src={thumbnailUrl}
                                                alt={`Video ${index + 1}`}
                                                className="w-full h-48 object-cover"
                                            />
                                            <div className="p-4">
                                                <p className="text-gray-600 truncate">Swami Bhakta Saraswati formerly kno...</p>
                                                <div className="flex justify-between items-center mt-4">
                                                    <Button
                                                        className="bg-blue-500 hover:bg-blue-600 text-white"
                                                        onClick={() => window.open(link, "_blank")}
                                                    >
                                                        Open Video
                                                    </Button>
                                                    <button
                                                        onClick={() => handleCopyLink(link)}
                                                        className="text-blue-500 hover:text-blue-600"
                                                        title="Copy Link"
                                                    >
                                                        <Copy className="w-5 h-5" />
                                                    </button>
                                                </div>
                                                {copiedLink === link && (
                                                    <p className="text-green-500 text-sm mt-2">Link copied!</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                    <CarouselPrevious className="ml-3"/>
                    <CarouselNext className="mr-3.5"/>
                </Carousel>
            </div>
        </div>
    );
};

export default VideoClip;