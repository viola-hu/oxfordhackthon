import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './home.css'


class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            "End of Trip Facilities": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 6623,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "XYZ Company": { "bid": 8195, "rating": 4 } },
                { "General Assembly": { "bid": 7463, "rating": 1 } },
                { "ABC Suppliers": { "bid": 8267, "rating": 3 } },
                { "Good Company": { "bid": 10694, "rating": 2 } },
                { "Construction R Us": { "bid": 11854, "rating": 4 } }
              ]
            },
            "Solar Electric Energy System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 4734,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Amandas Construction": { "bid": 4381, "rating": 5 } },
                { "Simons Super Co.": { "bid": 1565, "rating": 2 } },
                { "Mediocre Inc.": { "bid": 2145, "rating": 1 } },
                { "The fixeruppers": { "bid": 5766, "rating": 2 } },
                { "ABC Suppliers": { "bid": 276, "rating": 2 } },
                { "Construction R Us": { "bid": 4108, "rating": 4 } }
              ]
            },
            "Lavatories": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 5356,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Construction R Us": { "bid": 1392, "rating": 3 } },
                { "Australian Construction Co.": { "bid": 7964, "rating": 5 } },
                { "XYZ Company": { "bid": 7008, "rating": 3 } },
                { "Awesome Company": { "bid": 1752, "rating": 3 } },
                { "Give it a Crack Co.": { "bid": 4625, "rating": 2 } },
                { "General Assembly": { "bid": 1040, "rating": 1 } }
              ]
            },
            "Faucets & Shower Heads": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 5165,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Australian Construction Co.": { "bid": 1715, "rating": 2 } },
                { "Simons Super Co.": { "bid": 4197, "rating": 5 } },
                { "XYZ Company": { "bid": 5794, "rating": 1 } },
                { "ABC Suppliers": { "bid": 7310, "rating": 4 } }
              ]
            },
            "Fitness/ Gym Equipment": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 2357,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "NSW State Building Co.": { "bid": 3500, "rating": 5 } },
                { "Construction R Us": { "bid": 124, "rating": 1 } },
                { "Australian Construction Co.": { "bid": 2129, "rating": 2 } },
                { "Good Company": { "bid": 1536, "rating": 1 } },
                { "Give it a Crack Co.": { "bid": 46, "rating": 2 } },
                { "Mediocre Inc.": { "bid": 2107, "rating": 1 } }
              ]
            },
            "Circuit Breakers": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 3254,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Give it a Crack Co.": { "bid": 4910, "rating": 4 } },
                { "ABC Suppliers": { "bid": 3962, "rating": 2 } },
                { "The fixeruppers": { "bid": 3872, "rating": 3 } },
                { "Australian Construction Co.": { "bid": 4425, "rating": 1 } }
              ]
            },
            "Common Wire Nails": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 2656,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "XYZ Company": { "bid": 4525, "rating": 5 } },
                { "ABC Suppliers": { "bid": 1076, "rating": 3 } },
                { "Amandas Construction": { "bid": 4398, "rating": 2 } },
                { "General Assembly": { "bid": 3258, "rating": 5 } },
                { "Awesome Company": { "bid": 1694, "rating": 1 } },
                { "Terrible Buildings": { "bid": 2406, "rating": 1 } }
              ]
            },
            "Burglar Alarm": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 6244,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "The fixeruppers": { "bid": 802, "rating": 5 } },
                { "Construction R Us": { "bid": 9835, "rating": 4 } },
                { "ABC Suppliers": { "bid": 5704, "rating": 1 } },
                { "Awesome Company": { "bid": 2152, "rating": 2 } },
                { "Give it a Crack Co.": { "bid": 1111, "rating": 4 } },
                { "Australian Construction Co.": { "bid": 292, "rating": 3 } },
                { "NSW State Building Co.": { "bid": 10288, "rating": 3 } }
              ]
            },
            "Ready Mixed Concrete": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 3527,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Amandas Construction": { "bid": 2318, "rating": 1 } },
                { "Construction R Us": { "bid": 994, "rating": 1 } },
                { "NSW State Building Co.": { "bid": 6081, "rating": 3 } },
                { "Australian Construction Co.": { "bid": 2199, "rating": 3 } },
                { "ABC Suppliers": { "bid": 2876, "rating": 1 } },
                { "Awesome Company": { "bid": 5992, "rating": 2 } },
                { "XYZ Company": { "bid": 4302, "rating": 2 } }
              ]
            },
            "Concrete (On Site Mix)": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9349,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Awesome Company": { "bid": 10668, "rating": 3 } },
                { "ABC Suppliers": { "bid": 16438, "rating": 3 } },
                { "General Assembly": { "bid": 3089, "rating": 1 } },
                { "Terrible Buildings": { "bid": 4787, "rating": 1 } },
                { "Mediocre Inc.": { "bid": 8429, "rating": 4 } },
                { "Amandas Construction": { "bid": 4086, "rating": 5 } },
                { "NSW State Building Co.": { "bid": 5503, "rating": 1 } }
              ]
            },
            "Gravel Bedding": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 70,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Awesome Company": { "bid": 24, "rating": 2 } },
                { "Mediocre Inc.": { "bid": 24, "rating": 4 } },
                { "General Assembly": { "bid": 4, "rating": 3 } },
                { "Australian Construction Co.": { "bid": 119, "rating": 5 } }
              ]
            },
            "Crushed Gravel ¾": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 2500,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Simons Super Co.": { "bid": 2951, "rating": 4 } },
                { "Give it a Crack Co.": { "bid": 4104, "rating": 5 } },
                { "Amandas Construction": { "bid": 899, "rating": 4 } },
                { "Construction R Us": { "bid": 3809, "rating": 2 } },
                { "The fixeruppers": { "bid": 3264, "rating": 2 } }
              ]
            },
            "Washed Sand": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9386,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "The fixeruppers": { "bid": 16353, "rating": 3 } },
                { "NSW State Building Co.": { "bid": 16708, "rating": 3 } },
                { "Amandas Construction": { "bid": 6121, "rating": 1 } },
                { "Simons Super Co.": { "bid": 9241, "rating": 4 } }
              ]
            },
            "Portland Cement": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 2334,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "General Assembly": { "bid": 1084, "rating": 2 } },
                { "Construction R Us": { "bid": 1092, "rating": 4 } },
                { "XYZ Company": { "bid": 860, "rating": 3 } },
                { "ABC Suppliers": { "bid": 346, "rating": 5 } },
                { "The fixeruppers": { "bid": 693, "rating": 4 } },
                { "Good Company": { "bid": 1949, "rating": 2 } },
                { "Give it a Crack Co.": { "bid": 143, "rating": 2 } },
                { "NSW State Building Co.": { "bid": 2964, "rating": 1 } }
              ]
            },
            "Formworks": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 5215,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "General Assembly": { "bid": 1131, "rating": 1 } },
                { "Mediocre Inc.": { "bid": 2469, "rating": 2 } },
                { "Construction R Us": { "bid": 1559, "rating": 1 } },
                { "Simons Super Co.": { "bid": 2626, "rating": 5 } },
                { "Awesome Company": { "bid": 3588, "rating": 5 } },
                { "ABC Suppliers": { "bid": 342, "rating": 5 } },
                { "Terrible Buildings": { "bid": 1632, "rating": 1 } },
                { "Give it a Crack Co.": { "bid": 1564, "rating": 3 } }
              ]
            },
            "Marine Plywood": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 8065,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "General Assembly": { "bid": 7507, "rating": 3 } },
                { "Australian Construction Co.": { "bid": 250, "rating": 2 } },
                { "NSW State Building Co.": { "bid": 13870, "rating": 2 } },
                { "Construction R Us": { "bid": 3236, "rating": 4 } },
                { "Mediocre Inc.": { "bid": 5034, "rating": 5 } },
                { "Amandas Construction": { "bid": 2008, "rating": 2 } }
              ]
            },
            "Ordinary Plywood": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 5743,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "NSW State Building Co.": { "bid": 10280, "rating": 1 } },
                { "Simons Super Co.": { "bid": 3764, "rating": 4 } },
                { "The fixeruppers": { "bid": 2825, "rating": 3 } },
                { "Terrible Buildings": { "bid": 3276, "rating": 2 } },
                { "Give it a Crack Co.": { "bid": 6437, "rating": 2 } },
                { "Mediocre Inc.": { "bid": 3383, "rating": 4 } },
                { "Awesome Company": { "bid": 291, "rating": 5 } },
                { "Australian Construction Co.": { "bid": 80, "rating": 3 } }
              ]
            },
            "Formaply": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 5509,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Amandas Construction": { "bid": 2668, "rating": 1 } },
                { "Awesome Company": { "bid": 6136, "rating": 2 } },
                { "XYZ Company": { "bid": 1145, "rating": 1 } },
                { "Mediocre Inc.": { "bid": 3589, "rating": 4 } },
                { "Simons Super Co.": { "bid": 1626, "rating": 1 } },
                { "Terrible Buildings": { "bid": 2552, "rating": 1 } },
                { "Australian Construction Co.": { "bid": 488, "rating": 1 } },
                { "Give it a Crack Co.": { "bid": 3998, "rating": 2 } }
              ]
            },
            "Coco Lumber": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 2764,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Simons Super Co.": { "bid": 1794, "rating": 3 } },
                { "Good Company": { "bid": 3765, "rating": 3 } },
                { "General Assembly": { "bid": 3917, "rating": 5 } },
                { "Amandas Construction": { "bid": 4149, "rating": 2 } },
                { "Give it a Crack Co.": { "bid": 3788, "rating": 3 } },
                { "The fixeruppers": { "bid": 400, "rating": 3 } },
                { "ABC Suppliers": { "bid": 477, "rating": 4 } }
              ]
            },
            "Steel Scaffoldings & Formworks": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 376,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Mediocre Inc.": { "bid": 561, "rating": 4 } },
                { "Construction R Us": { "bid": 270, "rating": 3 } },
                { "Awesome Company": { "bid": 128, "rating": 4 } },
                { "Amandas Construction": { "bid": 93, "rating": 5 } },
                { "The fixeruppers": { "bid": 381, "rating": 3 } },
                { "XYZ Company": { "bid": 31, "rating": 1 } },
                { "Good Company": { "bid": 576, "rating": 4 } },
                { "NSW State Building Co.": { "bid": 572, "rating": 3 } },
                { "General Assembly": { "bid": 248, "rating": 5 } }
              ]
            },
            "Rebarworks/ Steel Reinforcement": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 3212,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Terrible Buildings": { "bid": 4955, "rating": 2 } },
                { "General Assembly": { "bid": 409, "rating": 1 } },
                { "Mediocre Inc.": { "bid": 2040, "rating": 1 } },
                { "Awesome Company": { "bid": 5394, "rating": 3 } }
              ]
            },
            "Deformed Bars (Grade 33, 40, 60)": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 3330,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "General Assembly": { "bid": 1080, "rating": 5 } },
                { "Mediocre Inc.": { "bid": 3272, "rating": 1 } },
                { "Good Company": { "bid": 3347, "rating": 2 } },
                { "ABC Suppliers": { "bid": 2612, "rating": 2 } },
                { "Construction R Us": { "bid": 3436, "rating": 5 } },
                { "NSW State Building Co.": { "bid": 3840, "rating": 5 } }
              ]
            },
            "G.I. Wire, #16": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 7646,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Construction R Us": { "bid": 4481, "rating": 5 } },
                { "Amandas Construction": { "bid": 9987, "rating": 4 } },
                { "Give it a Crack Co.": { "bid": 10872, "rating": 1 } },
                { "Awesome Company": { "bid": 6844, "rating": 2 } },
                { "ABC Suppliers": { "bid": 2887, "rating": 1 } },
                { "Terrible Buildings": { "bid": 4892, "rating": 4 } }
              ]
            },
            "Wide Flange Beams": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 7169,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Terrible Buildings": { "bid": 10593, "rating": 3 } },
                { "Amandas Construction": { "bid": 6061, "rating": 2 } },
                { "Good Company": { "bid": 9470, "rating": 3 } },
                { "NSW State Building Co.": { "bid": 5644, "rating": 1 } },
                { "General Assembly": { "bid": 3898, "rating": 4 } },
                { "Mediocre Inc.": { "bid": 7135, "rating": 5 } }
              ]
            },
            "C- Channels": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 2916,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Terrible Buildings": { "bid": 762, "rating": 2 } },
                { "Good Company": { "bid": 4597, "rating": 1 } },
                { "Simons Super Co.": { "bid": 3442, "rating": 3 } }
              ]
            },
            "Mild Steel Plates": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 1459,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "XYZ Company": { "bid": 1631, "rating": 4 } },
                { "NSW State Building Co.": { "bid": 816, "rating": 5 } },
                { "Amandas Construction": { "bid": 1725, "rating": 3 } },
                { "Australian Construction Co.": { "bid": 387, "rating": 5 } },
                { "Mediocre Inc.": { "bid": 1921, "rating": 3 } },
                { "ABC Suppliers": { "bid": 1645, "rating": 1 } },
                { "The fixeruppers": { "bid": 968, "rating": 5 } },
                { "Awesome Company": { "bid": 2230, "rating": 1 } }
              ]
            },
            "Exterior & Interior Walls": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 2678,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Mediocre Inc.": { "bid": 3637, "rating": 1 } },
                { "Give it a Crack Co.": { "bid": 2335, "rating": 1 } },
                { "Australian Construction Co.": { "bid": 4395, "rating": 4 } },
                { "Awesome Company": { "bid": 806, "rating": 4 } },
                { "Terrible Buildings": { "bid": 4641, "rating": 5 } }
              ]
            },
            "CHB (Concrete Hollw Blocks)": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 3038,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Australian Construction Co.": { "bid": 3294, "rating": 4 } },
                { "Construction R Us": { "bid": 2944, "rating": 4 } },
                { "XYZ Company": { "bid": 2571, "rating": 1 } },
                { "Awesome Company": { "bid": 3527, "rating": 1 } },
                { "Give it a Crack Co.": { "bid": 2369, "rating": 3 } }
              ]
            },
            "Deformed Bars": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9490,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "The fixeruppers": { "bid": 8787, "rating": 4 } },
                { "Simons Super Co.": { "bid": 5618, "rating": 1 } },
                { "Good Company": { "bid": 2394, "rating": 4 } },
                { "Construction R Us": { "bid": 6160, "rating": 4 } },
                { "Give it a Crack Co.": { "bid": 11110, "rating": 2 } },
                { "Amandas Construction": { "bid": 339, "rating": 1 } },
                { "General Assembly": { "bid": 12097, "rating": 4 } },
                { "NSW State Building Co.": { "bid": 13434, "rating": 5 } },
                { "Mediocre Inc.": { "bid": 1881, "rating": 4 } }
              ]
            },
            "Ceramic Floor Tiles for T&B": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 7847,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Mediocre Inc.": { "bid": 11833, "rating": 5 } },
                { "The fixeruppers": { "bid": 3253, "rating": 2 } },
                { "Simons Super Co.": { "bid": 11704, "rating": 3 } },
                { "General Assembly": { "bid": 6419, "rating": 3 } },
                { "Construction R Us": { "bid": 12320, "rating": 1 } },
                { "ABC Suppliers": { "bid": 6070, "rating": 5 } },
                { "Amandas Construction": { "bid": 4890, "rating": 3 } }
              ]
            },
            "Ceramic Floor Tiles for Offices, Private Rooms": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 6565,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Amandas Construction": { "bid": 4258, "rating": 3 } },
                { "Mediocre Inc.": { "bid": 3643, "rating": 1 } },
                { "Good Company": { "bid": 2032, "rating": 2 } },
                { "Awesome Company": { "bid": 11589, "rating": 2 } }
              ]
            },
            "Granite, Marble, Vinyl Floor Finishes": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 2628,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "The fixeruppers": { "bid": 2584, "rating": 2 } },
                { "ABC Suppliers": { "bid": 2129, "rating": 5 } },
                { "NSW State Building Co.": { "bid": 3845, "rating": 4 } },
                { "Terrible Buildings": { "bid": 4189, "rating": 2 } },
                { "Mediocre Inc.": { "bid": 3003, "rating": 4 } },
                { "Simons Super Co.": { "bid": 1593, "rating": 1 } }
              ]
            },
            "Ceramic Wall Tiles for T&B": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 5689,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "The fixeruppers": { "bid": 6571, "rating": 2 } },
                { "ABC Suppliers": { "bid": 3460, "rating": 3 } },
                { "Amandas Construction": { "bid": 5204, "rating": 1 } },
                { "NSW State Building Co.": { "bid": 2032, "rating": 1 } },
                { "Australian Construction Co.": { "bid": 7988, "rating": 3 } },
                { "Terrible Buildings": { "bid": 6881, "rating": 4 } },
                { "Give it a Crack Co.": { "bid": 6834, "rating": 1 } }
              ]
            },
            "Ceramic Wall Tiles for Kitchen, Lavatories & Others Areas": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 6658,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "The fixeruppers": { "bid": 4616, "rating": 5 } },
                { "Australian Construction Co.": { "bid": 9652, "rating": 3 } },
                { "XYZ Company": { "bid": 9988, "rating": 2 } },
                { "Amandas Construction": { "bid": 5358, "rating": 3 } },
                { "General Assembly": { "bid": 4483, "rating": 2 } }
              ]
            },
            "Aluminum Composite Panels (Exterior & Interior Walls)": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9747,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "General Assembly": { "bid": 6235, "rating": 2 } },
                { "Good Company": { "bid": 11588, "rating": 3 } },
                { "Amandas Construction": { "bid": 12025, "rating": 2 } },
                { "Mediocre Inc.": { "bid": 16775, "rating": 1 } },
                { "Awesome Company": { "bid": 9052, "rating": 3 } }
              ]
            },
            "Mouldings": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 8609,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Simons Super Co.": { "bid": 10466, "rating": 3 } },
                { "Australian Construction Co.": { "bid": 15381, "rating": 3 } },
                { "General Assembly": { "bid": 10566, "rating": 3 } },
                { "Construction R Us": { "bid": 11688, "rating": 3 } },
                { "XYZ Company": { "bid": 12150, "rating": 4 } },
                { "Give it a Crack Co.": { "bid": 12405, "rating": 4 } },
                { "The fixeruppers": { "bid": 10922, "rating": 4 } },
                { "ABC Suppliers": { "bid": 9103, "rating": 1 } }
              ]
            },
            "Fiber Cement Boards": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 8491,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "The fixeruppers": { "bid": 2467, "rating": 3 } },
                { "ABC Suppliers": { "bid": 3710, "rating": 3 } },
                { "Amandas Construction": { "bid": 8151, "rating": 3 } },
                { "Awesome Company": { "bid": 9467, "rating": 1 } },
                { "Australian Construction Co.": { "bid": 8650, "rating": 4 } },
                { "Give it a Crack Co.": { "bid": 10083, "rating": 1 } }
              ]
            },
            "Light Metal Frames and Accessories": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 8992,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Terrible Buildings": { "bid": 12999, "rating": 2 } },
                { "Construction R Us": { "bid": 7123, "rating": 4 } },
                { "XYZ Company": { "bid": 8021, "rating": 3 } },
                { "Awesome Company": { "bid": 261, "rating": 1 } },
                { "Give it a Crack Co.": { "bid": 7877, "rating": 4 } },
                { "Mediocre Inc.": { "bid": 1508, "rating": 1 } },
                { "The fixeruppers": { "bid": 12620, "rating": 4 } },
                { "Amandas Construction": { "bid": 9427, "rating": 4 } }
              ]
            },
            "Aluminum Ceiling Panels": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 5976,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "ABC Suppliers": { "bid": 4200, "rating": 3 } },
                { "Terrible Buildings": { "bid": 10534, "rating": 2 } },
                { "Amandas Construction": { "bid": 7904, "rating": 4 } },
                { "Simons Super Co.": { "bid": 5955, "rating": 2 } }
              ]
            },
            "Acoustic Ceiling System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 6246,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Give it a Crack Co.": { "bid": 9484, "rating": 1 } },
                { "Amandas Construction": { "bid": 965, "rating": 2 } },
                { "Terrible Buildings": { "bid": 755, "rating": 5 } },
                { "Awesome Company": { "bid": 4393, "rating": 4 } },
                { "XYZ Company": { "bid": 1421, "rating": 2 } },
                { "Australian Construction Co.": { "bid": 5461, "rating": 2 } }
              ]
            },
            "Ceramic Tiles for Stairs": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9717,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Awesome Company": { "bid": 8440, "rating": 2 } },
                { "Terrible Buildings": { "bid": 4288, "rating": 3 } },
                { "Simons Super Co.": { "bid": 13835, "rating": 2 } },
                { "Amandas Construction": { "bid": 15510, "rating": 4 } },
                { "XYZ Company": { "bid": 13457, "rating": 3 } },
                { "Mediocre Inc.": { "bid": 4123, "rating": 2 } },
                { "ABC Suppliers": { "bid": 5652, "rating": 2 } },
                { "Give it a Crack Co.": { "bid": 11738, "rating": 5 } },
                { "The fixeruppers": { "bid": 13471, "rating": 1 } }
              ]
            },
            "Ceramic Tiles for Hallways & Balconies": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 1063,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "ABC Suppliers": { "bid": 159, "rating": 1 } },
                { "Australian Construction Co.": { "bid": 402, "rating": 5 } },
                { "Terrible Buildings": { "bid": 1029, "rating": 3 } },
                { "Mediocre Inc.": { "bid": 40, "rating": 2 } },
                { "NSW State Building Co.": { "bid": 1185, "rating": 5 } },
                { "General Assembly": { "bid": 732, "rating": 1 } },
                { "XYZ Company": { "bid": 1101, "rating": 2 } }
              ]
            },
            "Brass Stair Nosing, Brass Strips": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 1150,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Awesome Company": { "bid": 2034, "rating": 5 } },
                { "The fixeruppers": { "bid": 1323, "rating": 2 } },
                { "ABC Suppliers": { "bid": 838, "rating": 3 } },
                { "Terrible Buildings": { "bid": 1051, "rating": 1 } },
                { "General Assembly": { "bid": 1581, "rating": 2 } },
                { "Mediocre Inc.": { "bid": 208, "rating": 5 } },
                { "Construction R Us": { "bid": 2003, "rating": 2 } },
                { "Good Company": { "bid": 485, "rating": 1 } }
              ]
            },
            "Rubberized Floorings": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 2207,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Australian Construction Co.": { "bid": 1427, "rating": 3 } },
                { "NSW State Building Co.": { "bid": 3654, "rating": 2 } },
                { "Good Company": { "bid": 1899, "rating": 5 } },
                { "Mediocre Inc.": { "bid": 3537, "rating": 3 } },
                { "The fixeruppers": { "bid": 3206, "rating": 3 } },
                { "Give it a Crack Co.": { "bid": 3910, "rating": 2 } },
                { "Simons Super Co.": { "bid": 1820, "rating": 1 } }
              ]
            },
            "Epoxy Floor Coatings": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9292,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Australian Construction Co.": { "bid": 15676, "rating": 4 } },
                { "NSW State Building Co.": { "bid": 5645, "rating": 1 } },
                { "XYZ Company": { "bid": 13076, "rating": 4 } },
                { "The fixeruppers": { "bid": 247, "rating": 3 } },
                { "General Assembly": { "bid": 9996, "rating": 5 } },
                { "Simons Super Co.": { "bid": 4513, "rating": 1 } },
                { "Terrible Buildings": { "bid": 2780, "rating": 5 } }
              ]
            },
            "Wooden Doors (Panel & Flush Doors)": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 7717,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Give it a Crack Co.": { "bid": 1932, "rating": 4 } },
                { "Good Company": { "bid": 2361, "rating": 2 } },
                { "Amandas Construction": { "bid": 10716, "rating": 4 } },
                { "NSW State Building Co.": { "bid": 4572, "rating": 2 } },
                { "Mediocre Inc.": { "bid": 2278, "rating": 3 } },
                { "General Assembly": { "bid": 11687, "rating": 3 } },
                { "The fixeruppers": { "bid": 5554, "rating": 1 } },
                { "Awesome Company": { "bid": 13456, "rating": 4 } }
              ]
            },
            "Metal Doors/ Steel Doors/ Steel Grilles": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9948,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "ABC Suppliers": { "bid": 10382, "rating": 2 } },
                { "The fixeruppers": { "bid": 7481, "rating": 3 } },
                { "NSW State Building Co.": { "bid": 13277, "rating": 1 } },
                { "Give it a Crack Co.": { "bid": 14250, "rating": 2 } },
                { "Terrible Buildings": { "bid": 16887, "rating": 4 } }
              ]
            },
            "Roll up Shutters": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 4402,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Good Company": { "bid": 3782, "rating": 5 } },
                { "General Assembly": { "bid": 6498, "rating": 1 } },
                { "Mediocre Inc.": { "bid": 844, "rating": 5 } },
                { "Awesome Company": { "bid": 2414, "rating": 4 } },
                { "Amandas Construction": { "bid": 1314, "rating": 4 } },
                { "XYZ Company": { "bid": 6497, "rating": 3 } },
                { "Construction R Us": { "bid": 7618, "rating": 1 } },
                { "NSW State Building Co.": { "bid": 4609, "rating": 5 } },
                { "Terrible Buildings": { "bid": 6353, "rating": 4 } },
                { "Simons Super Co.": { "bid": 7898, "rating": 4 } }
              ]
            },
            "Steel Casement Windows": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 8793,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "XYZ Company": { "bid": 6423, "rating": 5 } },
                { "The fixeruppers": { "bid": 5864, "rating": 4 } },
                { "General Assembly": { "bid": 5054, "rating": 3 } },
                { "Australian Construction Co.": { "bid": 12682, "rating": 1 } },
                { "Good Company": { "bid": 6869, "rating": 4 } },
                { "Terrible Buildings": { "bid": 12770, "rating": 1 } },
                { "NSW State Building Co.": { "bid": 66, "rating": 3 } },
                { "Awesome Company": { "bid": 3431, "rating": 1 } }
              ]
            },
            "Glass Aluminum Doors & Windows": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 6103,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "ABC Suppliers": { "bid": 8776, "rating": 2 } },
                { "Good Company": { "bid": 5152, "rating": 3 } },
                { "Give it a Crack Co.": { "bid": 9223, "rating": 4 } },
                { "Mediocre Inc.": { "bid": 7701, "rating": 4 } },
                { "The fixeruppers": { "bid": 5432, "rating": 3 } },
                { "NSW State Building Co.": { "bid": 7237, "rating": 5 } }
              ]
            },
            "Glass Curtain": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 4782,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Good Company": { "bid": 7216, "rating": 1 } },
                { "ABC Suppliers": { "bid": 5117, "rating": 2 } },
                { "XYZ Company": { "bid": 1819, "rating": 4 } },
                { "Mediocre Inc.": { "bid": 1602, "rating": 4 } },
                { "Terrible Buildings": { "bid": 4834, "rating": 4 } },
                { "Australian Construction Co.": { "bid": 4517, "rating": 1 } },
                { "General Assembly": { "bid": 701, "rating": 3 } }
              ]
            },
            "Door Closers & Door Stoppers": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 6772,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "General Assembly": { "bid": 889, "rating": 5 } },
                { "Amandas Construction": { "bid": 7527, "rating": 1 } },
                { "NSW State Building Co.": { "bid": 7847, "rating": 1 } },
                { "Mediocre Inc.": { "bid": 6952, "rating": 4 } },
                { "Give it a Crack Co.": { "bid": 9529, "rating": 4 } },
                { "Construction R Us": { "bid": 1172, "rating": 4 } },
                { "Terrible Buildings": { "bid": 4076, "rating": 1 } },
                { "ABC Suppliers": { "bid": 7546, "rating": 2 } },
                { "Good Company": { "bid": 5141, "rating": 2 } }
              ]
            },
            "Hardware/ Locksets & Other Accessories": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 1118,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "NSW State Building Co.": { "bid": 891, "rating": 2 } },
                { "Australian Construction Co.": { "bid": 675, "rating": 5 } }
              ]
            },
            "Panic Device": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 4244,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Mediocre Inc.": { "bid": 3237, "rating": 2 } },
                { "General Assembly": { "bid": 1186, "rating": 5 } },
                { "Awesome Company": { "bid": 6468, "rating": 5 } },
                { "The fixeruppers": { "bid": 7171, "rating": 4 } },
                { "Construction R Us": { "bid": 2957, "rating": 4 } },
                { "ABC Suppliers": { "bid": 6839, "rating": 2 } },
                { "Terrible Buildings": { "bid": 7490, "rating": 2 } }
              ]
            },
            "Electronic Door Lock System/ Biometrics": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 4433,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Terrible Buildings": { "bid": 5762, "rating": 1 } },
                { "Amandas Construction": { "bid": 5541, "rating": 5 } },
                { "XYZ Company": { "bid": 7001, "rating": 5 } },
                { "Good Company": { "bid": 5288, "rating": 2 } },
                { "General Assembly": { "bid": 4159, "rating": 5 } },
                { "Australian Construction Co.": { "bid": 4341, "rating": 5 } }
              ]
            },
            "Good Lumber, Kiln Dried rough & S4S": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9189,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Awesome Company": { "bid": 7960, "rating": 3 } },
                { "Mediocre Inc.": { "bid": 12474, "rating": 2 } },
                { "Good Company": { "bid": 1213, "rating": 1 } },
                { "Australian Construction Co.": { "bid": 2257, "rating": 4 } },
                { "XYZ Company": { "bid": 850, "rating": 2 } },
                { "Terrible Buildings": { "bid": 5992, "rating": 2 } },
                { "NSW State Building Co.": { "bid": 12565, "rating": 2 } },
                { "Amandas Construction": { "bid": 7663, "rating": 2 } }
              ]
            },
            "Exterior Elastomeric Masonry Paint": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9334,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Australian Construction Co.": { "bid": 8204, "rating": 1 } },
                { "Amandas Construction": { "bid": 15786, "rating": 1 } },
                { "Good Company": { "bid": 4358, "rating": 2 } },
                { "Awesome Company": { "bid": 7892, "rating": 1 } },
                { "ABC Suppliers": { "bid": 696, "rating": 3 } },
                { "Construction R Us": { "bid": 5840, "rating": 2 } },
                { "Terrible Buildings": { "bid": 15416, "rating": 4 } }
              ]
            },
            "Interior Masonry Paint": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9004,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "XYZ Company": { "bid": 4295, "rating": 4 } },
                { "Mediocre Inc.": { "bid": 9653, "rating": 4 } },
                { "NSW State Building Co.": { "bid": 12901, "rating": 4 } },
                { "Simons Super Co.": { "bid": 5201, "rating": 2 } },
                { "Terrible Buildings": { "bid": 10019, "rating": 2 } },
                { "General Assembly": { "bid": 10464, "rating": 5 } },
                { "Good Company": { "bid": 4055, "rating": 5 } }
              ]
            },
            "Environment Friendly Paint & Coatings": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 5776,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Construction R Us": { "bid": 5045, "rating": 5 } },
                { "Amandas Construction": { "bid": 2153, "rating": 5 } },
                { "Awesome Company": { "bid": 3650, "rating": 5 } },
                { "NSW State Building Co.": { "bid": 1039, "rating": 2 } },
                { "General Assembly": { "bid": 9718, "rating": 2 } },
                { "Good Company": { "bid": 8014, "rating": 3 } }
              ]
            },
            "Ceiling & Ceiling Eaves": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 681,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "XYZ Company": { "bid": 214, "rating": 1 } },
                { "Mediocre Inc.": { "bid": 1128, "rating": 4 } },
                { "The fixeruppers": { "bid": 537, "rating": 4 } },
                { "Awesome Company": { "bid": 1113, "rating": 5 } },
                { "Simons Super Co.": { "bid": 562, "rating": 1 } },
                { "Amandas Construction": { "bid": 97, "rating": 3 } }
              ]
            },
            "Wooden Doors, Baseboards & Cornices": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9970,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Give it a Crack Co.": { "bid": 319, "rating": 1 } },
                { "Australian Construction Co.": { "bid": 16846, "rating": 2 } },
                { "Terrible Buildings": { "bid": 13654, "rating": 3 } },
                { "NSW State Building Co.": { "bid": 11275, "rating": 2 } },
                { "The fixeruppers": { "bid": 16095, "rating": 5 } },
                { "Construction R Us": { "bid": 9203, "rating": 1 } }
              ]
            },
            "Automotive Lacquer Paint for Roll-up Shutters": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 6782,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "The fixeruppers": { "bid": 4811, "rating": 3 } },
                { "Simons Super Co.": { "bid": 8574, "rating": 3 } },
                { "Mediocre Inc.": { "bid": 11473, "rating": 3 } },
                { "Give it a Crack Co.": { "bid": 3495, "rating": 1 } },
                { "ABC Suppliers": { "bid": 29, "rating": 1 } },
                { "Awesome Company": { "bid": 11481, "rating": 5 } }
              ]
            },
            "Metal Paint for Window & Steel Frames": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 6529,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "The fixeruppers": { "bid": 9554, "rating": 4 } },
                { "NSW State Building Co.": { "bid": 1844, "rating": 1 } },
                { "ABC Suppliers": { "bid": 6079, "rating": 1 } },
                { "XYZ Company": { "bid": 1283, "rating": 3 } },
                { "Australian Construction Co.": { "bid": 442, "rating": 2 } },
                { "Construction R Us": { "bid": 10178, "rating": 4 } }
              ]
            },
            "Polycarbonate Roofing for Canopies & Awnings on Steel": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 5506,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Amandas Construction": { "bid": 6874, "rating": 1 } },
                { "Give it a Crack Co.": { "bid": 8361, "rating": 1 } },
                { "The fixeruppers": { "bid": 5593, "rating": 4 } },
                { "Awesome Company": { "bid": 9224, "rating": 2 } },
                { "XYZ Company": { "bid": 7536, "rating": 3 } },
                { "Good Company": { "bid": 332, "rating": 3 } },
                { "Construction R Us": { "bid": 9478, "rating": 3 } }
              ]
            },
            "Framing and Aluminum Fasteners": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 8832,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Australian Construction Co.": { "bid": 8586, "rating": 1 } },
                { "Terrible Buildings": { "bid": 6244, "rating": 2 } },
                { "Simons Super Co.": { "bid": 11394, "rating": 4 } },
                { "Mediocre Inc.": { "bid": 7158, "rating": 3 } },
                { "Good Company": { "bid": 9977, "rating": 1 } },
                { "ABC Suppliers": { "bid": 15000, "rating": 5 } }
              ]
            },
            "Long Span Pre-painted G.I. Roofing": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 16,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Good Company": { "bid": 24, "rating": 1 } },
                { "Construction R Us": { "bid": 9, "rating": 3 } },
                { "Terrible Buildings": { "bid": 20, "rating": 4 } },
                { "The fixeruppers": { "bid": 17, "rating": 5 } },
                { "ABC Suppliers": { "bid": 1, "rating": 1 } },
                { "Amandas Construction": { "bid": 10, "rating": 2 } },
                { "Awesome Company": { "bid": 19, "rating": 4 } },
                { "XYZ Company": { "bid": 24, "rating": 1 } },
                { "NSW State Building Co.": { "bid": 13, "rating": 1 } }
              ]
            },
            "C-Purlins and Metal Framings": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 6222,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Terrible Buildings": { "bid": 11163, "rating": 4 } },
                { "General Assembly": { "bid": 6255, "rating": 5 } },
                { "Construction R Us": { "bid": 3345, "rating": 2 } },
                { "Awesome Company": { "bid": 964, "rating": 2 } },
                { "Australian Construction Co.": { "bid": 10523, "rating": 4 } }
              ]
            },
            "Bubble Type Aluminum Insulation": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 4234,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "NSW State Building Co.": { "bid": 7093, "rating": 4 } },
                { "Simons Super Co.": { "bid": 7139, "rating": 1 } },
                { "Awesome Company": { "bid": 3192, "rating": 2 } },
                { "Amandas Construction": { "bid": 6206, "rating": 4 } },
                { "XYZ Company": { "bid": 3937, "rating": 1 } },
                { "The fixeruppers": { "bid": 2612, "rating": 1 } },
                { "General Assembly": { "bid": 5797, "rating": 4 } },
                { "Give it a Crack Co.": { "bid": 1916, "rating": 5 } }
              ]
            },
            "PVC Membrane Waterproofing & Roofing System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9157,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Good Company": { "bid": 10133, "rating": 1 } },
                { "Awesome Company": { "bid": 6352, "rating": 5 } },
                { "Give it a Crack Co.": { "bid": 8474, "rating": 3 } },
                { "XYZ Company": { "bid": 13976, "rating": 3 } },
                { "Terrible Buildings": { "bid": 1213, "rating": 3 } },
                { "Amandas Construction": { "bid": 9166, "rating": 2 } }
              ]
            },
            "Cisten Tank Manhole Cover": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 7355,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Awesome Company": { "bid": 6992, "rating": 2 } },
                { "Good Company": { "bid": 4654, "rating": 1 } },
                { "Give it a Crack Co.": { "bid": 1783, "rating": 1 } },
                { "NSW State Building Co.": { "bid": 5864, "rating": 5 } },
                { "Mediocre Inc.": { "bid": 864, "rating": 3 } },
                { "Terrible Buildings": { "bid": 3908, "rating": 4 } },
                { "XYZ Company": { "bid": 7597, "rating": 4 } },
                { "Simons Super Co.": { "bid": 236, "rating": 3 } }
              ]
            },
            "Cistern Tank Ladder Rung": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 2979,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Amandas Construction": { "bid": 35, "rating": 4 } },
                { "Good Company": { "bid": 2576, "rating": 4 } },
                { "Simons Super Co.": { "bid": 1278, "rating": 4 } },
                { "General Assembly": { "bid": 3358, "rating": 3 } },
                { "NSW State Building Co.": { "bid": 1948, "rating": 4 } },
                { "Australian Construction Co.": { "bid": 3806, "rating": 3 } },
                { "XYZ Company": { "bid": 1054, "rating": 5 } },
                { "Awesome Company": { "bid": 1276, "rating": 1 } },
                { "Mediocre Inc.": { "bid": 4202, "rating": 4 } }
              ]
            },
            "Stairs Railings, Steps and Catwalk": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 2713,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "XYZ Company": { "bid": 2643, "rating": 2 } },
                { "Good Company": { "bid": 4495, "rating": 4 } },
                { "Give it a Crack Co.": { "bid": 2944, "rating": 2 } },
                { "Amandas Construction": { "bid": 2971, "rating": 1 } },
                { "Simons Super Co.": { "bid": 4362, "rating": 2 } },
                { "Australian Construction Co.": { "bid": 2038, "rating": 1 } }
              ]
            },
            "Main Stair Railing": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 5250,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Amandas Construction": { "bid": 2481, "rating": 5 } },
                { "General Assembly": { "bid": 2282, "rating": 3 } },
                { "ABC Suppliers": { "bid": 1850, "rating": 5 } },
                { "NSW State Building Co.": { "bid": 8532, "rating": 2 } },
                { "Terrible Buildings": { "bid": 8663, "rating": 2 } },
                { "XYZ Company": { "bid": 9188, "rating": 1 } },
                { "Construction R Us": { "bid": 2016, "rating": 3 } },
                { "Awesome Company": { "bid": 6513, "rating": 2 } }
              ]
            },
            "Foyer Railing": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 2546,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "NSW State Building Co.": { "bid": 534, "rating": 5 } },
                { "Awesome Company": { "bid": 4097, "rating": 1 } },
                { "Simons Super Co.": { "bid": 1257, "rating": 5 } },
                { "Amandas Construction": { "bid": 3092, "rating": 2 } },
                { "XYZ Company": { "bid": 1416, "rating": 5 } },
                { "Mediocre Inc.": { "bid": 981, "rating": 3 } }
              ]
            },
            "Balcony Railings": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 5105,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "ABC Suppliers": { "bid": 2439, "rating": 5 } },
                { "Good Company": { "bid": 1777, "rating": 2 } },
                { "XYZ Company": { "bid": 4997, "rating": 2 } }
              ]
            },
            "Ramp Railings": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 5983,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Australian Construction Co.": { "bid": 7266, "rating": 5 } },
                { "Mediocre Inc.": { "bid": 3441, "rating": 1 } },
                { "Awesome Company": { "bid": 4104, "rating": 1 } },
                { "Give it a Crack Co.": { "bid": 4324, "rating": 5 } },
                { "Simons Super Co.": { "bid": 10340, "rating": 2 } },
                { "Construction R Us": { "bid": 2436, "rating": 1 } },
                { "The fixeruppers": { "bid": 1256, "rating": 5 } },
                { "Amandas Construction": { "bid": 9835, "rating": 2 } }
              ]
            },
            "Roof Trusses": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 8966,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Give it a Crack Co.": { "bid": 6632, "rating": 5 } },
                { "General Assembly": { "bid": 1666, "rating": 3 } },
                { "NSW State Building Co.": { "bid": 8374, "rating": 3 } },
                { "Mediocre Inc.": { "bid": 7494, "rating": 4 } },
                { "ABC Suppliers": { "bid": 12543, "rating": 3 } },
                { "Construction R Us": { "bid": 9688, "rating": 2 } },
                { "Terrible Buildings": { "bid": 12664, "rating": 3 } },
                { "Simons Super Co.": { "bid": 9706, "rating": 2 } }
              ]
            },
            "Closets": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 5085,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "XYZ Company": { "bid": 348, "rating": 1 } },
                { "Awesome Company": { "bid": 3456, "rating": 1 } },
                { "Australian Construction Co.": { "bid": 4058, "rating": 3 } },
                { "General Assembly": { "bid": 3108, "rating": 4 } },
                { "Terrible Buildings": { "bid": 4888, "rating": 1 } },
                { "Construction R Us": { "bid": 5059, "rating": 5 } },
                { "The fixeruppers": { "bid": 4634, "rating": 5 } }
              ]
            },
            "Door Jambs": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 2594,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Simons Super Co.": { "bid": 2282, "rating": 3 } },
                { "General Assembly": { "bid": 1619, "rating": 1 } },
                { "ABC Suppliers": { "bid": 1545, "rating": 4 } },
                { "The fixeruppers": { "bid": 1498, "rating": 5 } },
                { "Give it a Crack Co.": { "bid": 658, "rating": 3 } },
                { "Good Company": { "bid": 1131, "rating": 1 } },
                { "Terrible Buildings": { "bid": 4428, "rating": 1 } },
                { "Awesome Company": { "bid": 3291, "rating": 3 } }
              ]
            },
            "Blinds": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 306,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Awesome Company": { "bid": 306, "rating": 5 } },
                { "Amandas Construction": { "bid": 544, "rating": 5 } },
                { "NSW State Building Co.": { "bid": 139, "rating": 2 } },
                { "Construction R Us": { "bid": 523, "rating": 2 } },
                { "ABC Suppliers": { "bid": 226, "rating": 2 } }
              ]
            },
            "Curtains & Draperies": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 4581,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Australian Construction Co.": { "bid": 6246, "rating": 1 } },
                { "Awesome Company": { "bid": 4013, "rating": 2 } },
                { "Construction R Us": { "bid": 2746, "rating": 2 } },
                { "ABC Suppliers": { "bid": 3040, "rating": 4 } },
                { "The fixeruppers": { "bid": 5685, "rating": 2 } },
                { "Good Company": { "bid": 1148, "rating": 4 } }
              ]
            },
            "Bed & Matresses": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 3429,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "XYZ Company": { "bid": 3287, "rating": 1 } },
                { "Simons Super Co.": { "bid": 4859, "rating": 2 } },
                { "The fixeruppers": { "bid": 2985, "rating": 2 } },
                { "General Assembly": { "bid": 3161, "rating": 4 } },
                { "Awesome Company": { "bid": 2977, "rating": 1 } },
                { "Amandas Construction": { "bid": 900, "rating": 5 } },
                { "Give it a Crack Co.": { "bid": 6053, "rating": 4 } }
              ]
            },
            "Bed Covers, Bedding Accessories": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 2065,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Terrible Buildings": { "bid": 671, "rating": 3 } },
                { "XYZ Company": { "bid": 757, "rating": 1 } },
                { "ABC Suppliers": { "bid": 1411, "rating": 3 } },
                { "Australian Construction Co.": { "bid": 869, "rating": 5 } },
                { "General Assembly": { "bid": 2240, "rating": 2 } },
                { "Good Company": { "bid": 2312, "rating": 3 } },
                { "Simons Super Co.": { "bid": 582, "rating": 4 } }
              ]
            },
            "Furniture and Accessories": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 8303,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Awesome Company": { "bid": 8867, "rating": 1 } },
                { "NSW State Building Co.": { "bid": 8098, "rating": 4 } },
                { "XYZ Company": { "bid": 7317, "rating": 5 } },
                { "Mediocre Inc.": { "bid": 2822, "rating": 5 } },
                { "ABC Suppliers": { "bid": 6317, "rating": 1 } },
                { "Good Company": { "bid": 4236, "rating": 1 } },
                { "Simons Super Co.": { "bid": 1455, "rating": 3 } },
                { "Amandas Construction": { "bid": 10931, "rating": 5 } },
                { "Australian Construction Co.": { "bid": 11179, "rating": 5 } }
              ]
            },
            "Integral Waterproofing Sytem": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 8573,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Amandas Construction": { "bid": 4884, "rating": 3 } },
                { "Terrible Buildings": { "bid": 7623, "rating": 1 } },
                { "XYZ Company": { "bid": 1674, "rating": 1 } },
                { "Construction R Us": { "bid": 13438, "rating": 2 } },
                { "Simons Super Co.": { "bid": 11865, "rating": 3 } },
                { "General Assembly": { "bid": 11156, "rating": 4 } },
                { "ABC Suppliers": { "bid": 3877, "rating": 3 } }
              ]
            },
            "Flexible Cementitious Waterproofing System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 2889,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Australian Construction Co.": { "bid": 4449, "rating": 5 } },
                { "Amandas Construction": { "bid": 1066, "rating": 3 } },
                { "NSW State Building Co.": { "bid": 2260, "rating": 3 } },
                { "Construction R Us": { "bid": 4591, "rating": 5 } },
                { "XYZ Company": { "bid": 731, "rating": 2 } },
                { "ABC Suppliers": { "bid": 4574, "rating": 1 } },
                { "Give it a Crack Co.": { "bid": 3939, "rating": 4 } }
              ]
            },
            "Epoxy Tank Lining": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 8997,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "The fixeruppers": { "bid": 8586, "rating": 4 } },
                { "Construction R Us": { "bid": 2973, "rating": 5 } },
                { "Mediocre Inc.": { "bid": 10764, "rating": 1 } },
                { "ABC Suppliers": { "bid": 8827, "rating": 4 } }
              ]
            },
            "Toilet & Bathrooms, Kitchen Areas": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9580,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Simons Super Co.": { "bid": 3091, "rating": 2 } },
                { "XYZ Company": { "bid": 4766, "rating": 5 } },
                { "Give it a Crack Co.": { "bid": 2108, "rating": 1 } },
                { "Australian Construction Co.": { "bid": 15718, "rating": 4 } },
                { "ABC Suppliers": { "bid": 17052, "rating": 4 } },
                { "Amandas Construction": { "bid": 9429, "rating": 4 } },
                { "Terrible Buildings": { "bid": 8559, "rating": 5 } }
              ]
            },
            "Roof Deck & Roof Over Deck Structure": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9441,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Awesome Company": { "bid": 5609, "rating": 4 } },
                { "Amandas Construction": { "bid": 16155, "rating": 2 } },
                { "The fixeruppers": { "bid": 7573, "rating": 1 } },
                { "Good Company": { "bid": 1529, "rating": 5 } }
              ]
            },
            "Flexible Cementitious Waterproofing Sytem": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 812,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Awesome Company": { "bid": 509, "rating": 1 } },
                { "Terrible Buildings": { "bid": 584, "rating": 5 } },
                { "Good Company": { "bid": 94, "rating": 5 } },
                { "Mediocre Inc.": { "bid": 833, "rating": 3 } },
                { "The fixeruppers": { "bid": 60, "rating": 1 } },
                { "Simons Super Co.": { "bid": 873, "rating": 2 } }
              ]
            },
            "Anti-Root PVC Membrane Green Roofing System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 6761,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Construction R Us": { "bid": 5637, "rating": 5 } },
                { "Australian Construction Co.": { "bid": 4527, "rating": 1 } },
                { "General Assembly": { "bid": 11801, "rating": 2 } },
                { "Awesome Company": { "bid": 6359, "rating": 4 } },
                { "ABC Suppliers": { "bid": 2098, "rating": 3 } },
                { "Amandas Construction": { "bid": 10474, "rating": 4 } },
                { "The fixeruppers": { "bid": 7364, "rating": 4 } },
                { "Simons Super Co.": { "bid": 5809, "rating": 2 } }
              ]
            },
            "Torch Applied Membrane Waterproofing System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 5465,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Terrible Buildings": { "bid": 1498, "rating": 4 } },
                { "NSW State Building Co.": { "bid": 5938, "rating": 4 } },
                { "Good Company": { "bid": 8181, "rating": 4 } },
                { "The fixeruppers": { "bid": 197, "rating": 5 } },
                { "General Assembly": { "bid": 8163, "rating": 5 } }
              ]
            },
            "Sleeves & Blockouts": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 6510,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "The fixeruppers": { "bid": 6576, "rating": 2 } },
                { "Mediocre Inc.": { "bid": 11450, "rating": 1 } },
                { "ABC Suppliers": { "bid": 6877, "rating": 2 } },
                { "Simons Super Co.": { "bid": 4398, "rating": 1 } },
                { "Awesome Company": { "bid": 309, "rating": 3 } },
                { "Amandas Construction": { "bid": 5395, "rating": 3 } }
              ]
            },
            "Ventilation Branches & Supports": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 432,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Awesome Company": { "bid": 396, "rating": 4 } },
                { "Give it a Crack Co.": { "bid": 494, "rating": 4 } },
                { "Amandas Construction": { "bid": 608, "rating": 5 } },
                { "The fixeruppers": { "bid": 289, "rating": 3 } },
                { "Construction R Us": { "bid": 306, "rating": 1 } },
                { "Simons Super Co.": { "bid": 339, "rating": 3 } },
                { "ABC Suppliers": { "bid": 465, "rating": 1 } },
                { "Terrible Buildings": { "bid": 318, "rating": 3 } },
                { "Mediocre Inc.": { "bid": 691, "rating": 1 } },
                { "NSW State Building Co.": { "bid": 564, "rating": 1 } }
              ]
            },
            "Wasteline Branches & Supports": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 8570,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Give it a Crack Co.": { "bid": 6697, "rating": 2 } },
                { "NSW State Building Co.": { "bid": 8616, "rating": 2 } },
                { "Australian Construction Co.": { "bid": 7509, "rating": 4 } },
                { "ABC Suppliers": { "bid": 8366, "rating": 5 } }
              ]
            },
            "Waterline Branches & Pipe Supports (PPR & PVC Pipes & Fittings)": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 780,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "General Assembly": { "bid": 1203, "rating": 1 } },
                { "XYZ Company": { "bid": 200, "rating": 4 } },
                { "Give it a Crack Co.": { "bid": 847, "rating": 2 } },
                { "Terrible Buildings": { "bid": 491, "rating": 1 } },
                { "Simons Super Co.": { "bid": 1086, "rating": 3 } }
              ]
            },
            "Downspout Branches, Pipe Supports & Pipe Hangers": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 7500,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "The fixeruppers": { "bid": 10257, "rating": 5 } },
                { "General Assembly": { "bid": 3875, "rating": 5 } },
                { "Amandas Construction": { "bid": 10454, "rating": 4 } },
                { "Construction R Us": { "bid": 10803, "rating": 1 } },
                { "Give it a Crack Co.": { "bid": 12954, "rating": 5 } },
                { "Good Company": { "bid": 11933, "rating": 1 } },
                { "ABC Suppliers": { "bid": 1482, "rating": 4 } },
                { "Simons Super Co.": { "bid": 8328, "rating": 3 } },
                { "XYZ Company": { "bid": 670, "rating": 1 } }
              ]
            },
            "Plumbing Fixtures": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 2556,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Awesome Company": { "bid": 15, "rating": 2 } },
                { "The fixeruppers": { "bid": 4488, "rating": 2 } },
                { "General Assembly": { "bid": 3822, "rating": 2 } },
                { "Australian Construction Co.": { "bid": 3681, "rating": 3 } },
                { "Terrible Buildings": { "bid": 14, "rating": 2 } }
              ]
            },
            "Water Closets": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9247,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Amandas Construction": { "bid": 12313, "rating": 5 } },
                { "Simons Super Co.": { "bid": 9807, "rating": 5 } },
                { "Give it a Crack Co.": { "bid": 5540, "rating": 4 } },
                { "NSW State Building Co.": { "bid": 6050, "rating": 5 } },
                { "Awesome Company": { "bid": 10477, "rating": 3 } },
                { "XYZ Company": { "bid": 3465, "rating": 3 } },
                { "Construction R Us": { "bid": 15087, "rating": 3 } }
              ]
            },
            "Sewage Pumps & Sump Pumps (Pumps & Motors)": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 2235,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "XYZ Company": { "bid": 3923, "rating": 1 } },
                { "Construction R Us": { "bid": 3827, "rating": 5 } },
                { "General Assembly": { "bid": 3234, "rating": 3 } },
                { "Australian Construction Co.": { "bid": 2762, "rating": 5 } },
                { "The fixeruppers": { "bid": 311, "rating": 4 } },
                { "Awesome Company": { "bid": 454, "rating": 5 } },
                { "Mediocre Inc.": { "bid": 1947, "rating": 2 } }
              ]
            },
            "Booster Pumps & Transfer Pumps": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 5282,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Australian Construction Co.": { "bid": 7683, "rating": 3 } },
                { "XYZ Company": { "bid": 392, "rating": 5 } },
                { "Simons Super Co.": { "bid": 8263, "rating": 1 } },
                { "Construction R Us": { "bid": 1628, "rating": 3 } },
                { "Give it a Crack Co.": { "bid": 647, "rating": 1 } }
              ]
            },
            "Water Tanks & Water Storage System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 7111,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Australian Construction Co.": { "bid": 9511, "rating": 1 } },
                { "Terrible Buildings": { "bid": 4487, "rating": 5 } },
                { "Give it a Crack Co.": { "bid": 9999, "rating": 3 } },
                { "Awesome Company": { "bid": 199, "rating": 5 } },
                { "Simons Super Co.": { "bid": 11271, "rating": 2 } }
              ]
            },
            "Drainage Covers & Drainage System Accessories": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 1315,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "ABC Suppliers": { "bid": 1514, "rating": 3 } },
                { "Australian Construction Co.": { "bid": 87, "rating": 5 } },
                { "XYZ Company": { "bid": 2249, "rating": 5 } },
                { "Simons Super Co.": { "bid": 220, "rating": 1 } },
                { "The fixeruppers": { "bid": 248, "rating": 4 } },
                { "NSW State Building Co.": { "bid": 2001, "rating": 3 } },
                { "Amandas Construction": { "bid": 239, "rating": 5 } },
                { "Mediocre Inc.": { "bid": 1179, "rating": 4 } },
                { "General Assembly": { "bid": 401, "rating": 3 } }
              ]
            },
            "Testing & Commissioning": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 1652,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Amandas Construction": { "bid": 2700, "rating": 5 } },
                { "Construction R Us": { "bid": 318, "rating": 5 } },
                { "NSW State Building Co.": { "bid": 170, "rating": 1 } },
                { "Awesome Company": { "bid": 2573, "rating": 3 } },
                { "XYZ Company": { "bid": 1736, "rating": 2 } },
                { "Good Company": { "bid": 2500, "rating": 5 } }
              ]
            },
            "Cable Tray": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9328,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Terrible Buildings": { "bid": 13716, "rating": 1 } },
                { "Mediocre Inc.": { "bid": 6132, "rating": 1 } },
                { "ABC Suppliers": { "bid": 4073, "rating": 1 } },
                { "Give it a Crack Co.": { "bid": 251, "rating": 3 } },
                { "Simons Super Co.": { "bid": 9913, "rating": 4 } },
                { "Good Company": { "bid": 13314, "rating": 5 } }
              ]
            },
            "Conduit to 15 (RSC & PVC Conduits)": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 429,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Give it a Crack Co.": { "bid": 48, "rating": 5 } },
                { "Construction R Us": { "bid": 629, "rating": 5 } },
                { "ABC Suppliers": { "bid": 681, "rating": 2 } },
                { "Good Company": { "bid": 115, "rating": 5 } },
                { "XYZ Company": { "bid": 507, "rating": 5 } },
                { "Amandas Construction": { "bid": 286, "rating": 4 } },
                { "Australian Construction Co.": { "bid": 744, "rating": 3 } },
                { "General Assembly": { "bid": 113, "rating": 5 } },
                { "Simons Super Co.": { "bid": 102, "rating": 5 } }
              ]
            },
            "Conduit in Concrete Slab": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 8580,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Australian Construction Co.": { "bid": 2880, "rating": 1 } },
                { "Give it a Crack Co.": { "bid": 14465, "rating": 5 } },
                { "General Assembly": { "bid": 175, "rating": 4 } },
                { "Good Company": { "bid": 12915, "rating": 4 } },
                { "Construction R Us": { "bid": 12567, "rating": 3 } },
                { "Simons Super Co.": { "bid": 14558, "rating": 4 } },
                { "XYZ Company": { "bid": 14293, "rating": 5 } },
                { "Terrible Buildings": { "bid": 2913, "rating": 4 } }
              ]
            },
            "Conduit in Trench": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 2256,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Mediocre Inc.": { "bid": 4051, "rating": 1 } },
                { "Amandas Construction": { "bid": 2945, "rating": 3 } },
                { "Awesome Company": { "bid": 1041, "rating": 4 } },
                { "Give it a Crack Co.": { "bid": 1188, "rating": 5 } },
                { "Construction R Us": { "bid": 1893, "rating": 4 } },
                { "XYZ Company": { "bid": 1163, "rating": 1 } },
                { "Australian Construction Co.": { "bid": 3858, "rating": 3 } },
                { "Good Company": { "bid": 1202, "rating": 2 } },
                { "The fixeruppers": { "bid": 1688, "rating": 5 } },
                { "Terrible Buildings": { "bid": 3034, "rating": 3 } }
              ]
            },
            "Trench Duct": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 191,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "The fixeruppers": { "bid": 211, "rating": 2 } },
                { "Amandas Construction": { "bid": 334, "rating": 1 } },
                { "NSW State Building Co.": { "bid": 342, "rating": 1 } },
                { "General Assembly": { "bid": 76, "rating": 3 } },
                { "ABC Suppliers": { "bid": 17, "rating": 4 } },
                { "Give it a Crack Co.": { "bid": 18, "rating": 3 } },
                { "Awesome Company": { "bid": 93, "rating": 4 } },
                { "Construction R Us": { "bid": 97, "rating": 2 } }
              ]
            },
            "Under Floor Duct": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9893,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Good Company": { "bid": 8335, "rating": 4 } },
                { "Terrible Buildings": { "bid": 12258, "rating": 1 } },
                { "Give it a Crack Co.": { "bid": 3372, "rating": 4 } },
                { "Construction R Us": { "bid": 4167, "rating": 2 } },
                { "General Assembly": { "bid": 9194, "rating": 4 } },
                { "XYZ Company": { "bid": 919, "rating": 3 } },
                { "The fixeruppers": { "bid": 4012, "rating": 5 } }
              ]
            },
            "Wire Mold Raceway": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9128,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Amandas Construction": { "bid": 14563, "rating": 5 } },
                { "XYZ Company": { "bid": 2968, "rating": 3 } },
                { "Terrible Buildings": { "bid": 14041, "rating": 4 } },
                { "Give it a Crack Co.": { "bid": 10785, "rating": 2 } },
                { "Simons Super Co.": { "bid": 12779, "rating": 4 } },
                { "Australian Construction Co.": { "bid": 10366, "rating": 5 } },
                { "Awesome Company": { "bid": 2086, "rating": 5 } },
                { "The fixeruppers": { "bid": 10262, "rating": 4 } }
              ]
            },
            "Wire Way": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 6339,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Terrible Buildings": { "bid": 7543, "rating": 1 } },
                { "XYZ Company": { "bid": 7440, "rating": 5 } },
                { "The fixeruppers": { "bid": 9667, "rating": 1 } },
                { "Australian Construction Co.": { "bid": 2811, "rating": 3 } }
              ]
            },
            "Elctrical Cable Fasteners and Hangers": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 675,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Amandas Construction": { "bid": 1122, "rating": 3 } },
                { "Good Company": { "bid": 790, "rating": 2 } },
                { "Mediocre Inc.": { "bid": 11, "rating": 4 } },
                { "Australian Construction Co.": { "bid": 1023, "rating": 4 } },
                { "ABC Suppliers": { "bid": 606, "rating": 1 } },
                { "General Assembly": { "bid": 721, "rating": 5 } },
                { "NSW State Building Co.": { "bid": 230, "rating": 2 } },
                { "The fixeruppers": { "bid": 179, "rating": 3 } },
                { "Terrible Buildings": { "bid": 1107, "rating": 2 } }
              ]
            },
            "Armored Cable": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 7531,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "The fixeruppers": { "bid": 3722, "rating": 5 } },
                { "Mediocre Inc.": { "bid": 10448, "rating": 1 } }
              ]
            },
            "Control Cable": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 6166,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Good Company": { "bid": 2833, "rating": 5 } },
                { "Construction R Us": { "bid": 8725, "rating": 2 } },
                { "NSW State Building Co.": { "bid": 4001, "rating": 4 } },
                { "ABC Suppliers": { "bid": 5540, "rating": 3 } }
              ]
            },
            "Shielded Cable": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 3077,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Amandas Construction": { "bid": 4580, "rating": 5 } },
                { "Mediocre Inc.": { "bid": 557, "rating": 3 } },
                { "Awesome Company": { "bid": 666, "rating": 1 } },
                { "ABC Suppliers": { "bid": 2341, "rating": 4 } },
                { "NSW State Building Co.": { "bid": 4625, "rating": 5 } },
                { "Construction R Us": { "bid": 424, "rating": 1 } }
              ]
            },
            "Non-Metallic Sheated Cable": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 256,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Amandas Construction": { "bid": 139, "rating": 5 } },
                { "Australian Construction Co.": { "bid": 230, "rating": 1 } },
                { "General Assembly": { "bid": 36, "rating": 1 } },
                { "Good Company": { "bid": 172, "rating": 2 } }
              ]
            },
            "Ground Rods": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 277,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Construction R Us": { "bid": 416, "rating": 1 } },
                { "XYZ Company": { "bid": 91, "rating": 1 } },
                { "Mediocre Inc.": { "bid": 202, "rating": 4 } }
              ]
            },
            "Wires & Cable (Phelp Dodge, Duraflex, Philflex)": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 2013,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "NSW State Building Co.": { "bid": 2065, "rating": 4 } },
                { "ABC Suppliers": { "bid": 437, "rating": 4 } },
                { "Amandas Construction": { "bid": 3134, "rating": 1 } },
                { "The fixeruppers": { "bid": 1770, "rating": 4 } },
                { "Australian Construction Co.": { "bid": 3447, "rating": 5 } }
              ]
            },
            "Pull Boxes and Cabinets": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 7096,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Awesome Company": { "bid": 2291, "rating": 1 } },
                { "Amandas Construction": { "bid": 10712, "rating": 4 } },
                { "Terrible Buildings": { "bid": 8211, "rating": 3 } },
                { "NSW State Building Co.": { "bid": 12485, "rating": 1 } },
                { "Give it a Crack Co.": { "bid": 889, "rating": 5 } },
                { "Simons Super Co.": { "bid": 9277, "rating": 5 } },
                { "The fixeruppers": { "bid": 3308, "rating": 1 } }
              ]
            },
            "Outlet Boxes": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 5028,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Mediocre Inc.": { "bid": 3830, "rating": 3 } },
                { "Construction R Us": { "bid": 6974, "rating": 5 } },
                { "Australian Construction Co.": { "bid": 2271, "rating": 4 } },
                { "Terrible Buildings": { "bid": 6879, "rating": 4 } },
                { "Good Company": { "bid": 8317, "rating": 5 } },
                { "NSW State Building Co.": { "bid": 140, "rating": 3 } }
              ]
            },
            "Wiring Devices (Toggle Switch, Dimmer Switch, Etc.)": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 8276,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Terrible Buildings": { "bid": 5295, "rating": 2 } },
                { "Awesome Company": { "bid": 11521, "rating": 2 } },
                { "NSW State Building Co.": { "bid": 14007, "rating": 1 } },
                { "Australian Construction Co.": { "bid": 6928, "rating": 3 } },
                { "Amandas Construction": { "bid": 6895, "rating": 1 } },
                { "Construction R Us": { "bid": 1783, "rating": 5 } },
                { "Good Company": { "bid": 9220, "rating": 5 } }
              ]
            },
            "Low Voltage Switching (Relays, Flush Switch, Master)": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 5242,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "NSW State Building Co.": { "bid": 4556, "rating": 1 } },
                { "Good Company": { "bid": 6670, "rating": 1 } },
                { "Simons Super Co.": { "bid": 1166, "rating": 4 } },
                { "Terrible Buildings": { "bid": 5674, "rating": 4 } },
                { "Construction R Us": { "bid": 8710, "rating": 2 } }
              ]
            },
            "Control Rectifier, Switch Plates": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 4491,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "ABC Suppliers": { "bid": 3324, "rating": 1 } },
                { "Terrible Buildings": { "bid": 3072, "rating": 5 } },
                { "NSW State Building Co.": { "bid": 2494, "rating": 1 } }
              ]
            },
            "Control Stations": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 2556,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Mediocre Inc.": { "bid": 4107, "rating": 5 } },
                { "The fixeruppers": { "bid": 82, "rating": 1 } },
                { "Simons Super Co.": { "bid": 3986, "rating": 4 } },
                { "Construction R Us": { "bid": 3688, "rating": 5 } },
                { "Give it a Crack Co.": { "bid": 1305, "rating": 4 } },
                { "Amandas Construction": { "bid": 3998, "rating": 1 } },
                { "NSW State Building Co.": { "bid": 1013, "rating": 2 } }
              ]
            },
            "Fuse Cabinets": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 2142,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Australian Construction Co.": { "bid": 471, "rating": 5 } },
                { "General Assembly": { "bid": 1777, "rating": 5 } },
                { "NSW State Building Co.": { "bid": 2672, "rating": 4 } },
                { "Terrible Buildings": { "bid": 2960, "rating": 1 } },
                { "Awesome Company": { "bid": 3400, "rating": 5 } }
              ]
            },
            "Motor Connections": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 1380,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Good Company": { "bid": 1603, "rating": 4 } },
                { "NSW State Building Co.": { "bid": 958, "rating": 5 } },
                { "Give it a Crack Co.": { "bid": 1918, "rating": 4 } },
                { "ABC Suppliers": { "bid": 4, "rating": 3 } },
                { "Mediocre Inc.": { "bid": 1294, "rating": 1 } }
              ]
            },
            "Motor Starters, Magnetic Starters & Controls": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9002,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Awesome Company": { "bid": 14575, "rating": 5 } },
                { "NSW State Building Co.": { "bid": 9914, "rating": 4 } },
                { "Terrible Buildings": { "bid": 6948, "rating": 2 } },
                { "XYZ Company": { "bid": 508, "rating": 1 } },
                { "The fixeruppers": { "bid": 7372, "rating": 2 } },
                { "Mediocre Inc.": { "bid": 2007, "rating": 1 } },
                { "Construction R Us": { "bid": 7146, "rating": 3 } },
                { "General Assembly": { "bid": 4701, "rating": 4 } }
              ]
            },
            "Panel Boards": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 3136,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "ABC Suppliers": { "bid": 1741, "rating": 1 } },
                { "Mediocre Inc.": { "bid": 1265, "rating": 4 } },
                { "Amandas Construction": { "bid": 2200, "rating": 5 } },
                { "NSW State Building Co.": { "bid": 1081, "rating": 5 } }
              ]
            },
            "Panel Board Circuit Breakers": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 4799,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "ABC Suppliers": { "bid": 4529, "rating": 2 } },
                { "Australian Construction Co.": { "bid": 2624, "rating": 4 } },
                { "Mediocre Inc.": { "bid": 5751, "rating": 1 } },
                { "The fixeruppers": { "bid": 6151, "rating": 1 } },
                { "Good Company": { "bid": 4394, "rating": 4 } },
                { "NSW State Building Co.": { "bid": 2572, "rating": 3 } },
                { "General Assembly": { "bid": 7991, "rating": 2 } },
                { "XYZ Company": { "bid": 1099, "rating": 4 } }
              ]
            },
            "Safety Switches": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 3367,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Simons Super Co.": { "bid": 698, "rating": 1 } },
                { "Australian Construction Co.": { "bid": 5316, "rating": 4 } },
                { "General Assembly": { "bid": 2783, "rating": 2 } },
                { "ABC Suppliers": { "bid": 3331, "rating": 2 } },
                { "Mediocre Inc.": { "bid": 645, "rating": 3 } },
                { "Construction R Us": { "bid": 4017, "rating": 1 } }
              ]
            },
            "Switch Boards": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 8939,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Simons Super Co.": { "bid": 12601, "rating": 5 } },
                { "ABC Suppliers": { "bid": 14119, "rating": 1 } },
                { "XYZ Company": { "bid": 5041, "rating": 4 } },
                { "Australian Construction Co.": { "bid": 1281, "rating": 3 } },
                { "Terrible Buildings": { "bid": 15972, "rating": 2 } },
                { "Good Company": { "bid": 5101, "rating": 3 } },
                { "Give it a Crack Co.": { "bid": 7766, "rating": 5 } }
              ]
            },
            "Distribution Section Group Mounted Bus Bars": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 4277,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Good Company": { "bid": 7401, "rating": 5 } },
                { "Amandas Construction": { "bid": 5951, "rating": 1 } },
                { "Construction R Us": { "bid": 3018, "rating": 3 } },
                { "The fixeruppers": { "bid": 1986, "rating": 3 } },
                { "Mediocre Inc.": { "bid": 3467, "rating": 3 } },
                { "ABC Suppliers": { "bid": 1454, "rating": 1 } },
                { "Australian Construction Co.": { "bid": 5067, "rating": 5 } }
              ]
            },
            "Feeder Section Group Mounted Device Circuit": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 4414,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "XYZ Company": { "bid": 1249, "rating": 4 } },
                { "General Assembly": { "bid": 4101, "rating": 2 } },
                { "Simons Super Co.": { "bid": 5559, "rating": 2 } },
                { "Amandas Construction": { "bid": 2170, "rating": 5 } }
              ]
            },
            "Switchboard Instrument": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 2059,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "NSW State Building Co.": { "bid": 538, "rating": 4 } },
                { "XYZ Company": { "bid": 1072, "rating": 1 } },
                { "Australian Construction Co.": { "bid": 2053, "rating": 3 } },
                { "Simons Super Co.": { "bid": 67, "rating": 1 } },
                { "Awesome Company": { "bid": 3054, "rating": 5 } },
                { "ABC Suppliers": { "bid": 2091, "rating": 4 } }
              ]
            },
            "Oil-Filled Transformers": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 7691,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Simons Super Co.": { "bid": 12776, "rating": 4 } },
                { "XYZ Company": { "bid": 7642, "rating": 4 } },
                { "The fixeruppers": { "bid": 4281, "rating": 1 } },
                { "ABC Suppliers": { "bid": 10484, "rating": 4 } },
                { "NSW State Building Co.": { "bid": 11292, "rating": 2 } }
              ]
            },
            "Dry Type Transformers": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 7832,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Construction R Us": { "bid": 12753, "rating": 5 } },
                { "Simons Super Co.": { "bid": 8066, "rating": 3 } },
                { "Give it a Crack Co.": { "bid": 10885, "rating": 5 } },
                { "NSW State Building Co.": { "bid": 3337, "rating": 4 } },
                { "ABC Suppliers": { "bid": 11587, "rating": 4 } },
                { "XYZ Company": { "bid": 1752, "rating": 4 } },
                { "Australian Construction Co.": { "bid": 7044, "rating": 4 } },
                { "Amandas Construction": { "bid": 10433, "rating": 1 } }
              ]
            },
            "Copper Bus Ducts": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 7448,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "The fixeruppers": { "bid": 6203, "rating": 2 } },
                { "Give it a Crack Co.": { "bid": 4982, "rating": 4 } },
                { "Awesome Company": { "bid": 7163, "rating": 5 } },
                { "Australian Construction Co.": { "bid": 5390, "rating": 3 } },
                { "Mediocre Inc.": { "bid": 7570, "rating": 1 } },
                { "Simons Super Co.": { "bid": 11301, "rating": 1 } }
              ]
            },
            "Capacitors": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 2608,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Give it a Crack Co.": { "bid": 557, "rating": 5 } },
                { "Terrible Buildings": { "bid": 116, "rating": 1 } },
                { "XYZ Company": { "bid": 4204, "rating": 2 } },
                { "ABC Suppliers": { "bid": 3665, "rating": 2 } },
                { "Amandas Construction": { "bid": 5, "rating": 1 } },
                { "Australian Construction Co.": { "bid": 2192, "rating": 5 } },
                { "The fixeruppers": { "bid": 4650, "rating": 3 } },
                { "Construction R Us": { "bid": 1378, "rating": 2 } }
              ]
            },
            "Uninterruptible Power Supply System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 952,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Terrible Buildings": { "bid": 910, "rating": 3 } },
                { "Australian Construction Co.": { "bid": 1369, "rating": 2 } },
                { "Simons Super Co.": { "bid": 73, "rating": 3 } },
                { "Amandas Construction": { "bid": 1683, "rating": 1 } },
                { "Construction R Us": { "bid": 1373, "rating": 5 } },
                { "The fixeruppers": { "bid": 1313, "rating": 3 } }
              ]
            },
            "Generator System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9279,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "XYZ Company": { "bid": 12490, "rating": 2 } },
                { "Good Company": { "bid": 3696, "rating": 4 } },
                { "Australian Construction Co.": { "bid": 11735, "rating": 3 } },
                { "Amandas Construction": { "bid": 10038, "rating": 1 } },
                { "ABC Suppliers": { "bid": 5695, "rating": 2 } },
                { "General Assembly": { "bid": 9771, "rating": 3 } },
                { "Construction R Us": { "bid": 16432, "rating": 1 } },
                { "The fixeruppers": { "bid": 8527, "rating": 1 } },
                { "Simons Super Co.": { "bid": 8663, "rating": 1 } },
                { "Give it a Crack Co.": { "bid": 7337, "rating": 2 } },
                { "Mediocre Inc.": { "bid": 8229, "rating": 4 } }
              ]
            },
            "Automatic Transfer Switches": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 384,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Give it a Crack Co.": { "bid": 69, "rating": 5 } },
                { "NSW State Building Co.": { "bid": 134, "rating": 2 } },
                { "Amandas Construction": { "bid": 70, "rating": 4 } },
                { "Construction R Us": { "bid": 628, "rating": 1 } },
                { "Australian Construction Co.": { "bid": 361, "rating": 3 } },
                { "ABC Suppliers": { "bid": 578, "rating": 4 } },
                { "The fixeruppers": { "bid": 634, "rating": 5 } },
                { "General Assembly": { "bid": 558, "rating": 3 } },
                { "Simons Super Co.": { "bid": 431, "rating": 1 } },
                { "Mediocre Inc.": { "bid": 156, "rating": 1 } }
              ]
            },
            "Interior Lighting Fixture": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 3454,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "General Assembly": { "bid": 4839, "rating": 2 } },
                { "Good Company": { "bid": 1225, "rating": 3 } },
                { "Give it a Crack Co.": { "bid": 5891, "rating": 4 } }
              ]
            },
            "Exit Lighting": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 5289,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "ABC Suppliers": { "bid": 1347, "rating": 1 } },
                { "Amandas Construction": { "bid": 8854, "rating": 3 } },
                { "Mediocre Inc.": { "bid": 1917, "rating": 4 } },
                { "Terrible Buildings": { "bid": 3448, "rating": 1 } },
                { "XYZ Company": { "bid": 7448, "rating": 4 } },
                { "Simons Super Co.": { "bid": 8917, "rating": 1 } },
                { "Australian Construction Co.": { "bid": 3835, "rating": 4 } }
              ]
            },
            "Exterior Lighting Fixture": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9327,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Terrible Buildings": { "bid": 12352, "rating": 4 } },
                { "Mediocre Inc.": { "bid": 2459, "rating": 5 } },
                { "Give it a Crack Co.": { "bid": 13808, "rating": 4 } },
                { "ABC Suppliers": { "bid": 13343, "rating": 3 } },
                { "Good Company": { "bid": 8954, "rating": 5 } },
                { "General Assembly": { "bid": 1563, "rating": 5 } },
                { "Simons Super Co.": { "bid": 12168, "rating": 3 } },
                { "Australian Construction Co.": { "bid": 1345, "rating": 3 } },
                { "The fixeruppers": { "bid": 3311, "rating": 1 } },
                { "Amandas Construction": { "bid": 631, "rating": 5 } }
              ]
            },
            "Lamps and Lamp Post": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 1060,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Australian Construction Co.": { "bid": 911, "rating": 3 } },
                { "The fixeruppers": { "bid": 401, "rating": 1 } },
                { "General Assembly": { "bid": 1052, "rating": 3 } },
                { "Terrible Buildings": { "bid": 1151, "rating": 2 } },
                { "Construction R Us": { "bid": 1587, "rating": 1 } },
                { "NSW State Building Co.": { "bid": 1788, "rating": 1 } }
              ]
            },
            "LED Lighting System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 8929,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Awesome Company": { "bid": 1979, "rating": 2 } },
                { "NSW State Building Co.": { "bid": 12651, "rating": 5 } },
                { "Construction R Us": { "bid": 11748, "rating": 1 } },
                { "General Assembly": { "bid": 13674, "rating": 5 } },
                { "Good Company": { "bid": 322, "rating": 4 } },
                { "Give it a Crack Co.": { "bid": 6871, "rating": 5 } },
                { "Mediocre Inc.": { "bid": 13286, "rating": 3 } },
                { "The fixeruppers": { "bid": 8396, "rating": 4 } }
              ]
            },
            "Automated Lighting System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 7916,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Give it a Crack Co.": { "bid": 10202, "rating": 5 } },
                { "Simons Super Co.": { "bid": 8069, "rating": 1 } },
                { "Good Company": { "bid": 5112, "rating": 3 } },
                { "Australian Construction Co.": { "bid": 11200, "rating": 5 } },
                { "NSW State Building Co.": { "bid": 8622, "rating": 5 } }
              ]
            },
            "Detection System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 4465,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Good Company": { "bid": 1657, "rating": 4 } },
                { "XYZ Company": { "bid": 7280, "rating": 4 } },
                { "Australian Construction Co.": { "bid": 7813, "rating": 1 } },
                { "ABC Suppliers": { "bid": 5213, "rating": 4 } },
                { "Terrible Buildings": { "bid": 6687, "rating": 4 } },
                { "General Assembly": { "bid": 3505, "rating": 2 } }
              ]
            },
            "Door Switches": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 7363,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Terrible Buildings": { "bid": 6701, "rating": 5 } },
                { "Give it a Crack Co.": { "bid": 5012, "rating": 3 } },
                { "Good Company": { "bid": 12228, "rating": 2 } },
                { "The fixeruppers": { "bid": 4336, "rating": 5 } },
                { "Construction R Us": { "bid": 9859, "rating": 3 } }
              ]
            },
            "Exit Control Locks, Horn Alarm": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 3016,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "General Assembly": { "bid": 2913, "rating": 4 } },
                { "Terrible Buildings": { "bid": 5391, "rating": 1 } },
                { "Simons Super Co.": { "bid": 5064, "rating": 3 } },
                { "Amandas Construction": { "bid": 93, "rating": 5 } },
                { "NSW State Building Co.": { "bid": 2651, "rating": 1 } },
                { "Construction R Us": { "bid": 5368, "rating": 2 } },
                { "XYZ Company": { "bid": 656, "rating": 3 } },
                { "Awesome Company": { "bid": 3097, "rating": 3 } }
              ]
            },
            "Public Address System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 2702,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Simons Super Co.": { "bid": 4842, "rating": 5 } },
                { "Australian Construction Co.": { "bid": 325, "rating": 5 } },
                { "Amandas Construction": { "bid": 1640, "rating": 4 } },
                { "Terrible Buildings": { "bid": 2354, "rating": 4 } },
                { "Mediocre Inc.": { "bid": 2099, "rating": 5 } },
                { "General Assembly": { "bid": 395, "rating": 5 } },
                { "NSW State Building Co.": { "bid": 2384, "rating": 2 } },
                { "Good Company": { "bid": 187, "rating": 4 } },
                { "Awesome Company": { "bid": 4090, "rating": 5 } }
              ]
            },
            "Sound System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 1471,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Australian Construction Co.": { "bid": 2146, "rating": 3 } },
                { "Good Company": { "bid": 2178, "rating": 3 } },
                { "Simons Super Co.": { "bid": 791, "rating": 5 } },
                { "NSW State Building Co.": { "bid": 1259, "rating": 4 } },
                { "Amandas Construction": { "bid": 833, "rating": 4 } },
                { "General Assembly": { "bid": 2278, "rating": 3 } },
                { "Construction R Us": { "bid": 1196, "rating": 1 } }
              ]
            },
            "T.V. System, Master Antenna": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 3596,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Awesome Company": { "bid": 842, "rating": 1 } },
                { "The fixeruppers": { "bid": 2368, "rating": 2 } },
                { "Mediocre Inc.": { "bid": 1651, "rating": 1 } },
                { "Amandas Construction": { "bid": 3772, "rating": 4 } },
                { "ABC Suppliers": { "bid": 4411, "rating": 2 } },
                { "Terrible Buildings": { "bid": 1948, "rating": 5 } },
                { "Give it a Crack Co.": { "bid": 1056, "rating": 4 } },
                { "Simons Super Co.": { "bid": 4974, "rating": 3 } },
                { "Good Company": { "bid": 5787, "rating": 4 } },
                { "Australian Construction Co.": { "bid": 4953, "rating": 2 } }
              ]
            },
            "Telephone System, PABX": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 5807,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "The fixeruppers": { "bid": 1557, "rating": 2 } },
                { "XYZ Company": { "bid": 6596, "rating": 2 } },
                { "Give it a Crack Co.": { "bid": 3390, "rating": 4 } },
                { "Simons Super Co.": { "bid": 1870, "rating": 1 } }
              ]
            },
            "Centralized Paging System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 6095,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "ABC Suppliers": { "bid": 1462, "rating": 5 } },
                { "Amandas Construction": { "bid": 1741, "rating": 3 } },
                { "Australian Construction Co.": { "bid": 6345, "rating": 3 } },
                { "Give it a Crack Co.": { "bid": 316, "rating": 5 } },
                { "Awesome Company": { "bid": 8187, "rating": 3 } }
              ]
            },
            "Addressable Fire Alarm System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 7711,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Mediocre Inc.": { "bid": 1661, "rating": 3 } },
                { "Terrible Buildings": { "bid": 3781, "rating": 4 } },
                { "Australian Construction Co.": { "bid": 4790, "rating": 4 } },
                { "Simons Super Co.": { "bid": 11648, "rating": 1 } }
              ]
            },
            "Structured Cabling and Data Network System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 2251,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Awesome Company": { "bid": 704, "rating": 3 } },
                { "General Assembly": { "bid": 2383, "rating": 2 } },
                { "Construction R Us": { "bid": 3598, "rating": 1 } },
                { "Terrible Buildings": { "bid": 997, "rating": 1 } },
                { "XYZ Company": { "bid": 668, "rating": 1 } },
                { "Good Company": { "bid": 2471, "rating": 5 } },
                { "ABC Suppliers": { "bid": 3360, "rating": 2 } },
                { "Simons Super Co.": { "bid": 790, "rating": 2 } },
                { "Amandas Construction": { "bid": 1378, "rating": 4 } }
              ]
            },
            "Lightning Arrester": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9732,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "General Assembly": { "bid": 8707, "rating": 4 } },
                { "Mediocre Inc.": { "bid": 6346, "rating": 1 } },
                { "Simons Super Co.": { "bid": 2745, "rating": 2 } },
                { "Give it a Crack Co.": { "bid": 16994, "rating": 1 } },
                { "Australian Construction Co.": { "bid": 9436, "rating": 4 } },
                { "XYZ Company": { "bid": 7095, "rating": 4 } }
              ]
            },
            "Automatic Fire Suppression System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 3391,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Terrible Buildings": { "bid": 3197, "rating": 1 } },
                { "XYZ Company": { "bid": 4460, "rating": 3 } },
                { "NSW State Building Co.": { "bid": 2031, "rating": 5 } },
                { "Awesome Company": { "bid": 4544, "rating": 1 } },
                { "Mediocre Inc.": { "bid": 5956, "rating": 2 } }
              ]
            },
            "Fire Equipment Cabinets": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 5385,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "The fixeruppers": { "bid": 5014, "rating": 1 } },
                { "Simons Super Co.": { "bid": 8530, "rating": 2 } },
                { "NSW State Building Co.": { "bid": 4364, "rating": 3 } },
                { "Australian Construction Co.": { "bid": 7918, "rating": 5 } },
                { "Give it a Crack Co.": { "bid": 1718, "rating": 4 } },
                { "Good Company": { "bid": 3976, "rating": 3 } },
                { "Construction R Us": { "bid": 2660, "rating": 4 } }
              ]
            },
            "Fire Extinguishers": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9902,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Australian Construction Co.": { "bid": 10246, "rating": 1 } },
                { "Simons Super Co.": { "bid": 14929, "rating": 1 } },
                { "ABC Suppliers": { "bid": 3287, "rating": 3 } },
                { "XYZ Company": { "bid": 2683, "rating": 3 } },
                { "Give it a Crack Co.": { "bid": 16200, "rating": 5 } },
                { "NSW State Building Co.": { "bid": 7897, "rating": 2 } }
              ]
            },
            "Fire Hose & Equipment": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 3619,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "General Assembly": { "bid": 4623, "rating": 3 } },
                { "Mediocre Inc.": { "bid": 4016, "rating": 5 } },
                { "Simons Super Co.": { "bid": 2261, "rating": 3 } },
                { "Awesome Company": { "bid": 4568, "rating": 2 } },
                { "The fixeruppers": { "bid": 1528, "rating": 1 } }
              ]
            },
            "Fire Pumps": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 3340,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "ABC Suppliers": { "bid": 4957, "rating": 5 } },
                { "Mediocre Inc.": { "bid": 3090, "rating": 4 } },
                { "Construction R Us": { "bid": 1508, "rating": 5 } },
                { "Simons Super Co.": { "bid": 3266, "rating": 2 } },
                { "Terrible Buildings": { "bid": 3139, "rating": 4 } },
                { "Amandas Construction": { "bid": 154, "rating": 4 } }
              ]
            },
            "Fire Valves": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9872,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Construction R Us": { "bid": 14366, "rating": 4 } },
                { "Awesome Company": { "bid": 13681, "rating": 5 } },
                { "NSW State Building Co.": { "bid": 4233, "rating": 1 } },
                { "Simons Super Co.": { "bid": 5456, "rating": 1 } },
                { "Terrible Buildings": { "bid": 7446, "rating": 5 } },
                { "General Assembly": { "bid": 15041, "rating": 4 } },
                { "Good Company": { "bid": 4592, "rating": 1 } }
              ]
            },
            "Sprinkler System Component": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 4341,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "XYZ Company": { "bid": 7799, "rating": 5 } },
                { "Awesome Company": { "bid": 6473, "rating": 1 } },
                { "Mediocre Inc.": { "bid": 3189, "rating": 4 } },
                { "Terrible Buildings": { "bid": 1252, "rating": 2 } },
                { "Good Company": { "bid": 738, "rating": 5 } },
                { "Simons Super Co.": { "bid": 243, "rating": 5 } },
                { "NSW State Building Co.": { "bid": 5387, "rating": 2 } }
              ]
            },
            "Fire Hydrants": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 5772,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Mediocre Inc.": { "bid": 2472, "rating": 4 } },
                { "Australian Construction Co.": { "bid": 2549, "rating": 2 } },
                { "General Assembly": { "bid": 936, "rating": 2 } },
                { "Awesome Company": { "bid": 9443, "rating": 2 } }
              ]
            },
            "Centralized Air Conditioning System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 4075,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Amandas Construction": { "bid": 4934, "rating": 5 } },
                { "Mediocre Inc.": { "bid": 3134, "rating": 3 } },
                { "Simons Super Co.": { "bid": 1150, "rating": 3 } },
                { "Awesome Company": { "bid": 763, "rating": 5 } },
                { "Construction R Us": { "bid": 4363, "rating": 5 } },
                { "Australian Construction Co.": { "bid": 2858, "rating": 1 } }
              ]
            },
            "Window Type ACU": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 2700,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "ABC Suppliers": { "bid": 355, "rating": 4 } },
                { "XYZ Company": { "bid": 3696, "rating": 3 } },
                { "Mediocre Inc.": { "bid": 2356, "rating": 2 } },
                { "NSW State Building Co.": { "bid": 3056, "rating": 2 } },
                { "General Assembly": { "bid": 3909, "rating": 5 } },
                { "Give it a Crack Co.": { "bid": 1087, "rating": 3 } }
              ]
            },
            "Walk-in Freezers & Cold Storage System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 5730,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Mediocre Inc.": { "bid": 6692, "rating": 1 } },
                { "NSW State Building Co.": { "bid": 5153, "rating": 1 } },
                { "The fixeruppers": { "bid": 5472, "rating": 1 } },
                { "General Assembly": { "bid": 3485, "rating": 5 } }
              ]
            },
            "Elevator/ Lift System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9049,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Simons Super Co.": { "bid": 9639, "rating": 3 } },
                { "General Assembly": { "bid": 10671, "rating": 3 } },
                { "XYZ Company": { "bid": 11645, "rating": 1 } },
                { "NSW State Building Co.": { "bid": 5171, "rating": 4 } },
                { "Australian Construction Co.": { "bid": 4110, "rating": 3 } },
                { "Terrible Buildings": { "bid": 1138, "rating": 4 } }
              ]
            },
            "Dumbwaiters": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 3687,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "XYZ Company": { "bid": 1244, "rating": 3 } },
                { "Mediocre Inc.": { "bid": 671, "rating": 3 } },
                { "Amandas Construction": { "bid": 4837, "rating": 2 } },
                { "Construction R Us": { "bid": 3047, "rating": 3 } },
                { "Good Company": { "bid": 6502, "rating": 3 } },
                { "Awesome Company": { "bid": 6616, "rating": 3 } },
                { "General Assembly": { "bid": 6389, "rating": 3 } },
                { "Give it a Crack Co.": { "bid": 3071, "rating": 5 } },
                { "The fixeruppers": { "bid": 410, "rating": 1 } }
              ]
            },
            "Wastewater Treatment System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9056,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "XYZ Company": { "bid": 3137, "rating": 3 } },
                { "Amandas Construction": { "bid": 2498, "rating": 3 } },
                { "The fixeruppers": { "bid": 13267, "rating": 2 } },
                { "Construction R Us": { "bid": 10419, "rating": 4 } },
                { "NSW State Building Co.": { "bid": 14544, "rating": 3 } },
                { "Terrible Buildings": { "bid": 15098, "rating": 3 } },
                { "Awesome Company": { "bid": 1673, "rating": 3 } }
              ]
            },
            "Bactecides and Disinfectants": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 7413,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "NSW State Building Co.": { "bid": 11070, "rating": 1 } },
                { "General Assembly": { "bid": 10363, "rating": 3 } },
                { "XYZ Company": { "bid": 5922, "rating": 4 } },
                { "Mediocre Inc.": { "bid": 5315, "rating": 1 } },
                { "Awesome Company": { "bid": 9621, "rating": 5 } },
                { "Construction R Us": { "bid": 1402, "rating": 4 } },
                { "ABC Suppliers": { "bid": 6069, "rating": 5 } },
                { "The fixeruppers": { "bid": 4220, "rating": 1 } },
                { "Simons Super Co.": { "bid": 3486, "rating": 3 } }
              ]
            },
            "Solar Water Heating System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 1055,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Give it a Crack Co.": { "bid": 1151, "rating": 3 } },
                { "Amandas Construction": { "bid": 250, "rating": 4 } },
                { "The fixeruppers": { "bid": 526, "rating": 5 } },
                { "XYZ Company": { "bid": 1270, "rating": 3 } },
                { "ABC Suppliers": { "bid": 66, "rating": 3 } },
                { "Construction R Us": { "bid": 1633, "rating": 5 } }
              ]
            },
            "LPG Heating System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 1433,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Good Company": { "bid": 1365, "rating": 1 } },
                { "General Assembly": { "bid": 304, "rating": 2 } },
                { "Construction R Us": { "bid": 523, "rating": 4 } },
                { "XYZ Company": { "bid": 924, "rating": 2 } },
                { "Amandas Construction": { "bid": 1378, "rating": 2 } },
                { "Give it a Crack Co.": { "bid": 1719, "rating": 4 } },
                { "Terrible Buildings": { "bid": 2229, "rating": 2 } },
                { "The fixeruppers": { "bid": 260, "rating": 3 } }
              ]
            },
            "Solid Waste Management & Disposal": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9299,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Amandas Construction": { "bid": 2281, "rating": 1 } },
                { "Construction R Us": { "bid": 6959, "rating": 2 } },
                { "Simons Super Co.": { "bid": 15018, "rating": 2 } },
                { "Give it a Crack Co.": { "bid": 13772, "rating": 4 } },
                { "Mediocre Inc.": { "bid": 8996, "rating": 3 } },
                { "Terrible Buildings": { "bid": 7998, "rating": 3 } },
                { "Good Company": { "bid": 11151, "rating": 3 } }
              ]
            },
            "Waste Segregation System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 2498,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Give it a Crack Co.": { "bid": 3059, "rating": 5 } },
                { "Terrible Buildings": { "bid": 1128, "rating": 5 } },
                { "Simons Super Co.": { "bid": 3901, "rating": 4 } }
              ]
            },
            "Trash Bins/ Garbage Chutes": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 5202,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Terrible Buildings": { "bid": 3923, "rating": 2 } },
                { "Simons Super Co.": { "bid": 3173, "rating": 2 } },
                { "Awesome Company": { "bid": 294, "rating": 2 } },
                { "ABC Suppliers": { "bid": 2467, "rating": 4 } },
                { "Australian Construction Co.": { "bid": 4159, "rating": 2 } },
                { "Construction R Us": { "bid": 5155, "rating": 3 } }
              ]
            },
            "Green Building Solutions": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 211,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Give it a Crack Co.": { "bid": 5, "rating": 5 } },
                { "ABC Suppliers": { "bid": 135, "rating": 3 } },
                { "General Assembly": { "bid": 350, "rating": 2 } },
                { "The fixeruppers": { "bid": 134, "rating": 5 } },
                { "Terrible Buildings": { "bid": 0, "rating": 5 } },
                { "NSW State Building Co.": { "bid": 46, "rating": 3 } },
                { "Simons Super Co.": { "bid": 32, "rating": 5 } },
                { "Good Company": { "bid": 284, "rating": 2 } }
              ]
            },
            "Boiler System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 989,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Amandas Construction": { "bid": 1586, "rating": 5 } },
                { "Good Company": { "bid": 1008, "rating": 5 } },
                { "Give it a Crack Co.": { "bid": 1379, "rating": 1 } },
                { "ABC Suppliers": { "bid": 1386, "rating": 1 } },
                { "Australian Construction Co.": { "bid": 363, "rating": 5 } },
                { "XYZ Company": { "bid": 867, "rating": 2 } },
                { "Awesome Company": { "bid": 1173, "rating": 4 } }
              ]
            },
            "Cooling Tower System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 491,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "General Assembly": { "bid": 875, "rating": 2 } },
                { "NSW State Building Co.": { "bid": 285, "rating": 4 } },
                { "Construction R Us": { "bid": 422, "rating": 5 } },
                { "Amandas Construction": { "bid": 210, "rating": 2 } },
                { "Good Company": { "bid": 618, "rating": 1 } },
                { "Give it a Crack Co.": { "bid": 548, "rating": 5 } },
                { "The fixeruppers": { "bid": 114, "rating": 1 } },
                { "Australian Construction Co.": { "bid": 111, "rating": 3 } }
              ]
            },
            "Laundry Management": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 2295,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Awesome Company": { "bid": 125, "rating": 3 } },
                { "Mediocre Inc.": { "bid": 1837, "rating": 5 } },
                { "The fixeruppers": { "bid": 1807, "rating": 2 } },
                { "XYZ Company": { "bid": 341, "rating": 4 } },
                { "NSW State Building Co.": { "bid": 188, "rating": 1 } },
                { "General Assembly": { "bid": 2456, "rating": 4 } },
                { "Good Company": { "bid": 1005, "rating": 3 } },
                { "Construction R Us": { "bid": 3774, "rating": 1 } },
                { "Simons Super Co.": { "bid": 1406, "rating": 3 } }
              ]
            },
            "Air Purification and Ionizers": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 2531,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Australian Construction Co.": { "bid": 4046, "rating": 3 } },
                { "General Assembly": { "bid": 2170, "rating": 3 } },
                { "ABC Suppliers": { "bid": 3949, "rating": 3 } },
                { "Good Company": { "bid": 2910, "rating": 2 } },
                { "Mediocre Inc.": { "bid": 3221, "rating": 2 } }
              ]
            },
            "Skim Coatings & Rendering Mortars": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 1071,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Construction R Us": { "bid": 1366, "rating": 5 } },
                { "Good Company": { "bid": 206, "rating": 5 } },
                { "XYZ Company": { "bid": 180, "rating": 3 } },
                { "General Assembly": { "bid": 540, "rating": 5 } },
                { "Awesome Company": { "bid": 1824, "rating": 5 } },
                { "Amandas Construction": { "bid": 953, "rating": 2 } },
                { "The fixeruppers": { "bid": 477, "rating": 4 } },
                { "NSW State Building Co.": { "bid": 831, "rating": 1 } }
              ]
            },
            "Self-Levelling Grouts and Mortars": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 7705,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "ABC Suppliers": { "bid": 3577, "rating": 4 } },
                { "Good Company": { "bid": 10606, "rating": 1 } },
                { "General Assembly": { "bid": 3668, "rating": 5 } },
                { "Construction R Us": { "bid": 12177, "rating": 3 } },
                { "Awesome Company": { "bid": 10579, "rating": 1 } },
                { "NSW State Building Co.": { "bid": 4014, "rating": 2 } },
                { "XYZ Company": { "bid": 2405, "rating": 4 } }
              ]
            },
            "Floor Hardeners": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9200,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Give it a Crack Co.": { "bid": 12074, "rating": 3 } },
                { "Simons Super Co.": { "bid": 12, "rating": 2 } },
                { "The fixeruppers": { "bid": 12983, "rating": 1 } },
                { "Amandas Construction": { "bid": 13693, "rating": 2 } },
                { "General Assembly": { "bid": 15047, "rating": 3 } },
                { "ABC Suppliers": { "bid": 6990, "rating": 5 } }
              ]
            },
            "Sealants and Adhesives": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 1730,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "General Assembly": { "bid": 1178, "rating": 3 } },
                { "Good Company": { "bid": 2559, "rating": 2 } },
                { "ABC Suppliers": { "bid": 1531, "rating": 3 } },
                { "The fixeruppers": { "bid": 2883, "rating": 2 } },
                { "Give it a Crack Co.": { "bid": 2545, "rating": 4 } },
                { "Terrible Buildings": { "bid": 2848, "rating": 5 } },
                { "XYZ Company": { "bid": 1986, "rating": 5 } }
              ]
            },
            "Lightweight Concrete Materials": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 6289,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Mediocre Inc.": { "bid": 205, "rating": 2 } },
                { "Simons Super Co.": { "bid": 1910, "rating": 4 } },
                { "Construction R Us": { "bid": 4606, "rating": 3 } },
                { "Awesome Company": { "bid": 3819, "rating": 1 } },
                { "General Assembly": { "bid": 7713, "rating": 5 } },
                { "XYZ Company": { "bid": 2121, "rating": 4 } },
                { "Good Company": { "bid": 9156, "rating": 1 } }
              ]
            },
            "Precast T-Joists and Flooring System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 7830,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Terrible Buildings": { "bid": 9809, "rating": 1 } },
                { "NSW State Building Co.": { "bid": 3215, "rating": 1 } },
                { "Good Company": { "bid": 1611, "rating": 3 } },
                { "Give it a Crack Co.": { "bid": 306, "rating": 4 } },
                { "Awesome Company": { "bid": 3785, "rating": 4 } },
                { "Mediocre Inc.": { "bid": 6160, "rating": 2 } },
                { "Amandas Construction": { "bid": 10850, "rating": 3 } }
              ]
            },
            "Concrete Repair Chemicals": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 461,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Terrible Buildings": { "bid": 32, "rating": 2 } },
                { "General Assembly": { "bid": 799, "rating": 5 } },
                { "ABC Suppliers": { "bid": 87, "rating": 1 } },
                { "NSW State Building Co.": { "bid": 611, "rating": 1 } },
                { "Give it a Crack Co.": { "bid": 660, "rating": 5 } },
                { "Australian Construction Co.": { "bid": 196, "rating": 1 } },
                { "The fixeruppers": { "bid": 0, "rating": 2 } },
                { "Good Company": { "bid": 306, "rating": 5 } },
                { "Construction R Us": { "bid": 122, "rating": 4 } }
              ]
            },
            "Concrete Admixture & Plasticiser": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 1077,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Mediocre Inc.": { "bid": 1564, "rating": 4 } },
                { "NSW State Building Co.": { "bid": 881, "rating": 4 } },
                { "Give it a Crack Co.": { "bid": 474, "rating": 1 } },
                { "XYZ Company": { "bid": 1289, "rating": 1 } },
                { "The fixeruppers": { "bid": 1343, "rating": 4 } },
                { "Good Company": { "bid": 788, "rating": 4 } },
                { "Construction R Us": { "bid": 1892, "rating": 1 } }
              ]
            },
            "Gabions and Matresses": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 7441,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "The fixeruppers": { "bid": 2359, "rating": 3 } },
                { "ABC Suppliers": { "bid": 8956, "rating": 1 } },
                { "Australian Construction Co.": { "bid": 11355, "rating": 4 } },
                { "Give it a Crack Co.": { "bid": 6410, "rating": 5 } },
                { "Mediocre Inc.": { "bid": 12101, "rating": 2 } },
                { "Awesome Company": { "bid": 5448, "rating": 3 } },
                { "Terrible Buildings": { "bid": 11565, "rating": 4 } }
              ]
            },
            "Rock Anchoring System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 5050,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Amandas Construction": { "bid": 578, "rating": 1 } },
                { "Mediocre Inc.": { "bid": 5507, "rating": 5 } },
                { "ABC Suppliers": { "bid": 2545, "rating": 1 } },
                { "Good Company": { "bid": 8431, "rating": 5 } },
                { "Simons Super Co.": { "bid": 3779, "rating": 2 } }
              ]
            },
            "Soil/ Earth Stabilization System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 3842,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Simons Super Co.": { "bid": 2775, "rating": 4 } },
                { "General Assembly": { "bid": 3874, "rating": 4 } },
                { "Mediocre Inc.": { "bid": 6545, "rating": 5 } },
                { "XYZ Company": { "bid": 3215, "rating": 5 } },
                { "Amandas Construction": { "bid": 486, "rating": 4 } }
              ]
            },
            "Clubhouse Infinity Pool & Spa": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 4061,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Simons Super Co.": { "bid": 5682, "rating": 3 } },
                { "Good Company": { "bid": 6607, "rating": 3 } },
                { "XYZ Company": { "bid": 5063, "rating": 4 } },
                { "NSW State Building Co.": { "bid": 1332, "rating": 4 } }
              ]
            },
            "Filtration Equipment, Chemicals & Accessories": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9272,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "The fixeruppers": { "bid": 2793, "rating": 2 } },
                { "Construction R Us": { "bid": 6296, "rating": 1 } },
                { "Australian Construction Co.": { "bid": 2254, "rating": 2 } },
                { "General Assembly": { "bid": 3935, "rating": 1 } },
                { "Amandas Construction": { "bid": 6340, "rating": 4 } },
                { "Terrible Buildings": { "bid": 5271, "rating": 5 } }
              ]
            },
            "Water Features, Interactive Water Feature System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 4733,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "ABC Suppliers": { "bid": 526, "rating": 1 } },
                { "Good Company": { "bid": 6472, "rating": 1 } },
                { "Mediocre Inc.": { "bid": 6020, "rating": 5 } },
                { "The fixeruppers": { "bid": 3365, "rating": 4 } }
              ]
            },
            "Pristine Pool Finishing System (Textured Masonry Finish)": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 6406,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Terrible Buildings": { "bid": 6418, "rating": 4 } },
                { "Construction R Us": { "bid": 5465, "rating": 1 } },
                { "XYZ Company": { "bid": 4459, "rating": 4 } }
              ]
            },
            "Diamond Brite Pool Finishing System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 7660,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "The fixeruppers": { "bid": 3837, "rating": 1 } },
                { "Amandas Construction": { "bid": 6917, "rating": 1 } },
                { "XYZ Company": { "bid": 2623, "rating": 3 } },
                { "Australian Construction Co.": { "bid": 9808, "rating": 1 } },
                { "Awesome Company": { "bid": 12657, "rating": 2 } },
                { "Good Company": { "bid": 7759, "rating": 5 } },
                { "Mediocre Inc.": { "bid": 5773, "rating": 3 } },
                { "Give it a Crack Co.": { "bid": 11692, "rating": 2 } }
              ]
            },
            "Sauna, Steam Room & Spa Accessories": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9116,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Good Company": { "bid": 10716, "rating": 2 } },
                { "NSW State Building Co.": { "bid": 4396, "rating": 4 } },
                { "ABC Suppliers": { "bid": 11887, "rating": 5 } },
                { "Terrible Buildings": { "bid": 3433, "rating": 4 } },
                { "Give it a Crack Co.": { "bid": 11650, "rating": 4 } },
                { "Awesome Company": { "bid": 13420, "rating": 3 } },
                { "General Assembly": { "bid": 1004, "rating": 1 } },
                { "Construction R Us": { "bid": 4703, "rating": 2 } },
                { "The fixeruppers": { "bid": 3622, "rating": 4 } },
                { "Amandas Construction": { "bid": 10135, "rating": 2 } }
              ]
            },
            "Green Roofing System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 3633,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Good Company": { "bid": 2715, "rating": 5 } },
                { "Australian Construction Co.": { "bid": 4096, "rating": 4 } },
                { "Construction R Us": { "bid": 4202, "rating": 4 } },
                { "ABC Suppliers": { "bid": 1715, "rating": 2 } },
                { "Mediocre Inc.": { "bid": 6170, "rating": 2 } },
                { "NSW State Building Co.": { "bid": 4572, "rating": 4 } },
                { "XYZ Company": { "bid": 715, "rating": 1 } }
              ]
            },
            "Roof Deck Hardscape & Landscape": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 9492,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Construction R Us": { "bid": 13387, "rating": 3 } },
                { "NSW State Building Co.": { "bid": 7698, "rating": 2 } },
                { "ABC Suppliers": { "bid": 5219, "rating": 4 } },
                { "XYZ Company": { "bid": 1892, "rating": 4 } },
                { "Terrible Buildings": { "bid": 12484, "rating": 2 } },
                { "General Assembly": { "bid": 15809, "rating": 5 } }
              ]
            },
            "Panaflex & Neon Signages": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 5193,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "XYZ Company": { "bid": 953, "rating": 5 } },
                { "Give it a Crack Co.": { "bid": 8980, "rating": 4 } },
                { "Construction R Us": { "bid": 1382, "rating": 4 } },
                { "Simons Super Co.": { "bid": 3469, "rating": 5 } },
                { "Mediocre Inc.": { "bid": 6631, "rating": 3 } },
                { "Good Company": { "bid": 4537, "rating": 2 } },
                { "General Assembly": { "bid": 6598, "rating": 4 } }
              ]
            },
            "Directional Signages": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 4433,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Simons Super Co.": { "bid": 1116, "rating": 4 } },
                { "ABC Suppliers": { "bid": 4514, "rating": 4 } },
                { "Mediocre Inc.": { "bid": 3424, "rating": 3 } },
                { "The fixeruppers": { "bid": 6217, "rating": 1 } },
                { "Awesome Company": { "bid": 6989, "rating": 2 } },
                { "Amandas Construction": { "bid": 4873, "rating": 4 } }
              ]
            },
            "Advertising System, LED Signage System": {
              "info": {
                "details": "Prestige A Grade Office Building",
                "budget": 8812,
                "deadline": "20/12/19"
              },
              "bidders": [
                { "Give it a Crack Co.": { "bid": 8446, "rating": 4 } },
                { "Good Company": { "bid": 8572, "rating": 1 } },
                { "Mediocre Inc.": { "bid": 1202, "rating": 1 } },
                { "Terrible Buildings": { "bid": 331, "rating": 5 } },
                { "Amandas Construction": { "bid": 1473, "rating": 2 } },
                { "Simons Super Co.": { "bid": 13120, "rating": 3 } }
              ]
            }
          }
          

    } // end of constructor

    handleClick = () => {
        console.log('clicked')
    }

    render() {
        return(
            <div>
                <div className='items'>
                    <div className='contents'>
                    <div className='items-header'>
                        <h3>578 Items</h3>
                        <input type='text' placeholder='Search items'/>
                        <img className='items-img' style={{maxWidth:'70%'}} src={process.env.PUBLIC_URL +`search.png`}/>
                        
                    </div>
                {
                    this.state['Capacitors'].bidders.length > 0
                    ?

                    
                    Object.keys(this.state).map((p, index) => 
                    <div className='items-container'>

                        <Link to={{
                            pathname: "/item",
                            state: {
                                'hello': 'bye'
                            }
                            }}>
                        <button onClick={this.handleClick}>
                        {/* <div className='button-right'> */}
                        <div className='bidder'>{`${index + 1}.`}</div>
                        <div className='bidder'>{p}</div>
                        {/* </div> */}
                        <div className='budget' >{`Budget: $${this.state[p].info.budget}`}</div>
                        {/* {console.log(this.state[p])}
                        {console.log(this.state[p].info.budget)} */}
                        {/* {this.state[p].map(m => 
                            <div>{m.info.budget}</div>
                        )} */}
                        </button>
                        </Link>
                    </div>      
                    // Object.values(this.state).map(p => 
                    // <div>
                    //     <div>{p.info.budget}</div>
                    //     {/* {console.log(p.info.budget)}       */}
                    //     {/* <div>{p.info.budget}</div> */}
                    // </div>      
                    )
                    :
                    <div>Loading...</div>
                }
                </div>
                </div>
            </div>
        )
    }
}

export default Home;


