"use client";

export default function LocationSection() {
    return (
        <section id="location" className="py-24 bg-[#f3efe7]">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <p className="uppercase tracking-widest text-yellow-700 text-sm mb-3">
                        Prime Connectivity
                    </p>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                        Location Advantage
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-600">
                        Strategically located in Siolim, North Goa — minutes from
                        MOPA International Airport and surrounded by premium
                        lifestyle destinations.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    <div className="lg:border-r-4 border-yellow-700 lg:pr-12">

                        <h3 className="text-3xl italic font-medium mb-10">
                            Location Map
                        </h3>

                        <div className="mb-10">
                            <h4 className="text-yellow-700 font-semibold mb-4">
                                Transportation
                            </h4>

                            <ul className="space-y-3 text-gray-700 leading-relaxed">
                                <li>• Mapusa Bus Stand – 10 min</li>
                                <li>• Manohar International Airport – 20 min</li>
                                <li>• Thivim Railway Station – 20 min</li>
                            </ul>
                        </div>

                        <div className="mb-10">
                            <h4 className="text-yellow-700 font-semibold mb-4">
                                Restaurants & Cafés
                            </h4>

                            <ul className="space-y-3 text-gray-700 leading-relaxed">
                                <li>• Mimosu Cafesserie – 1 min</li>
                                <li>• Deryl's Cafe – 1 min</li>
                                <li>• Lobo Bar & Restaurant – 2 min</li>
                                <li>• Saiba Bar & Restaurant – 3 min</li>
                                <li>• Central Park Mapusa – 3 min</li>
                                <li>• Kefi Cafe – 3 min</li>
                                <li>• Cafe Alag – 5 min</li>
                                <li>• Hosa Restaurant – 6 min</li>
                                <li>• Opapagiao Bar – 7 min</li>
                                <li>• Cafe Thick to Riped – 8 min</li>
                                <li>• Spice Goa – 10 min</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-yellow-700 font-semibold mb-4">
                                Church
                            </h4>

                            <ul className="space-y-3 text-gray-700 leading-relaxed">
                                <li>• Tropa Church – 5 min</li>
                                <li>• St. Francis Xavier’s Church – 5 min</li>
                                <li>• The 5 Pillars Church – 6 min</li>
                                <li>• St. Sebastian Chapel – 10 min</li>
                            </ul>
                        </div>

                    </div>

                    <div className="h-[450px] lg:h-full rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="/map.jpg"
                            alt="Location Map"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}