'use client';

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, X } from "lucide-react";
import Image from "next/image";

const YourContribution = () => {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-4 py-16">
            <div className="max-w-7xl mx-auto">
                <Card className="w-full shadow-2xl border-orange-100">
                    <CardHeader className="border-b border-orange-200 p-8 pb-6 bg-gradient-to-r from-orange-50 to-amber-50">
                        <h2 className="text-3xl font-bold text-orange-800">Support Our Mission</h2>
                        <p className="text-orange-600 mt-2">Your contribution helps us continue our work</p>
                    </CardHeader>

                    <CardContent className="p-3">
                        <div className="mb-12 flex flex-col items-center ">
                            <div className=" relative h-64 w-64 bg-white p-4 shadow-lg rounded-lg border-2 overflow-hidden border-orange-200 flex items-center justify-center">
                                <div className="h-48 w-48 bg-orange-50 flex items-center justify-center rounded">
                                    <Image
                                        width={200}
                                        height={200}
                                        src={'/images/qr.jpg'}
                                        className="w-full object-cover"
                                        alt="QR code" />
                                </div>
                            </div>
                            <div className="mt-6 flex items-center bg-orange-50 px-6 py-3 rounded-full border border-orange-200">
                                <span className="font-medium text-orange-800">UPI ID: vimalwadhawang@okaxis</span>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="ml-3 text-orange-600 hover:text-orange-800 hover:bg-orange-100"
                                    onClick={() => copyToClipboard("vimalwadhawang@okaxis")}
                                >
                                    <Copy className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Bank Details Section */}
                        <div className="space-y-8 w-full">
                            <div className="text-center">
                                <h3 className="text-2xl font-semibold text-orange-800">Bank Transfer Options</h3>
                                <p className="text-orange-600 mt-2">You can also contribute via direct bank transfer</p>
                            </div>

                            {/* Bank Details Cards */}
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Bank 1 */}
                                <div className="bg-white rounded-lg border-2 border-orange-200 p-6 shadow-lg hover:shadow-xl transition-all hover:border-orange-300">
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-bold text-orange-800">SWAMI SHUKDEVANAND TRUST</h4>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="border-orange-200 text-orange-600 hover:bg-orange-50"
                                            onClick={() => copyToClipboard(`SWAMI SHUKDEVANAND TRUST\nAccount No.: 10373187320\nBank Name: STATE BANK OF INDIA\nBranch: SWARGASHRAM\nIFSC: SBIN0002493`)}
                                        >
                                            <Copy className="h-4 w-4 mr-2" />
                                            Copy
                                        </Button>
                                    </div>
                                    <div className="mt-4 space-y-2">
                                        <DetailItem label="Account No." value="10373187320" />
                                        <DetailItem label="Bank Name" value="STATE BANK OF INDIA" />
                                        <DetailItem label="Branch" value="SWARGASHRAM" />
                                        <DetailItem label="IFSC" value="SBIN0002493" />
                                    </div>
                                </div>

                                {/* Bank 2 */}
                                <div className="bg-white rounded-lg border-2 border-orange-200 p-6 shadow-lg hover:shadow-xl transition-all hover:border-orange-300">
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-bold text-orange-800">Swami Shukdevanand Trust</h4>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="border-orange-200 text-orange-600 hover:bg-orange-50"
                                            onClick={() => copyToClipboard(`Swami Shukdevanand Trust\nAccount No.: 0836020100018562\nBank Name: Punjab National Bank\nBranch: Jonk Swargashram\nIFSC: PUNB0792900`)}
                                        >
                                            <Copy className="h-4 w-4 mr-2" />
                                            Copy
                                        </Button>
                                    </div>
                                    <div className="mt-4 space-y-2">
                                        <DetailItem label="Account No." value="0836020100018562" />
                                        <DetailItem label="Bank Name" value="Punjab National Bank" />
                                        <DetailItem label="Branch" value="Jonk Swargashram" />
                                        <DetailItem label="IFSC" value="PUNB0792900" />
                                    </div>
                                </div>

                                {/* Bank 3 */}
                                <div className="bg-white rounded-lg border-2 border-orange-200 p-6 shadow-lg hover:shadow-xl transition-all hover:border-orange-300">
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-bold text-orange-800">Swami Shukdevanand Trust</h4>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="border-orange-200 text-orange-600 hover:bg-orange-50"
                                            onClick={() => copyToClipboard(`Swami Shukdevanand Trust\nAccount No.: 039194600000911\nBank Name: YES Bank\nBranch: Dehradun Road, Rishikesh\nIFSC: YESB0000391`)}
                                        >
                                            <Copy className="h-4 w-4 mr-2" />
                                            Copy
                                        </Button>
                                    </div>
                                    <div className="mt-4 space-y-2">
                                        <DetailItem label="Account No." value="039194600000911" />
                                        <DetailItem label="Bank Name" value="YES Bank" />
                                        <DetailItem label="Branch" value="Dehradun Road, Rishikesh" />
                                        <DetailItem label="IFSC" value="YESB0000391" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>

                </Card>
            </div>
        </div>
    );
};

// Reusable component for bank detail items
const DetailItem = ({ label, value }) => {
    return (
        <div className="flex">
            <span className="text-sm font-medium text-orange-600 w-28">{label}</span>
            <span className="text-sm text-orange-800 flex-1">: {value}</span>
        </div>
    );
};

export default YourContribution;