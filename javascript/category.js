document.addEventListener('DOMContentLoaded', ()=> {
let CategoryList = [
    
    // product one     
            {
                image : "images/top1.jpg" ,
                productName : "Sonia Skirt" , 
                ratings : 5 ,
                price: 175.00,
                brand : "Urban Fashion"
            },

            // product two 
            {
                image : "images/top2.jpg" ,
                productName : "Lounge Tunic / Cream" , 
                ratings : 3 ,
                price: 130.00,
                brand : "Urban Fashion"
            },

            // product three 
            {
                image : "images/top3.jpg" ,
                productName : "Sonia Dress" , 
                ratings : 5 ,
                price: 175.00,
                brand : "Urban Fashion"
            },

            // product four 
            {
                image : "images/top4.jpg" ,
                productName : "Striped Regular fit Shirt" , 
                ratings : 3,
                price: 54.34,
                brand : "Amazon"
            },
            // product five 
            {
                image : "images/top5.PNG" ,
                productName : "adidas Women's W E LIN LOOS TK TOPS" , 
                ratings : 4.5 ,
                price: 64.00,
                brand : "Amazon"
            },

            // product six 
            {
                image : "images/top6.PNG" ,
                productName : "Amazon Brand - Eden & Ivy Women's Striped Regular fit Shirt" , 
                ratings : 5 ,
                price: 44.12,
                brand : "Amazon"
            },

            // product seven 
            {
                image : "images/top7.PNG" ,
                productName : "Fashring Women's Short Sleeve Round Neck" , 
                ratings : 5 ,
                price: 39.99,
                brand : "Amazon"
            },

            // product eight 
            {
                image : "images/top8.PNG" ,
                productName : "Calvin Klein Women's LOGO ELASTIC MILANO TOP S/S Knit" , 
                ratings : 5 ,
                price: 137.61,
                brand : "Amazon"
            },

            // product nine 
            {
                image : "images/top9.PNG" ,
                productName : "Calvin Klein Jeans Women's Round Logo Ballet T-Shirt" , 
                ratings : 5 ,
                price: 103.53,
                brand : "Amazon"
            },

            // product ten 
            {
                image : "images/top10.PNG" ,
                productName : "ONLY Women's Vicky Blouses / Blue Color" , 
                ratings : 5 ,
                price: 166.77,
                brand : "Amazon"
            },

            // product eleven 
            {
                image : "images/top11.PNG" ,
                productName : "Styleville.in Women's Floral Regular Fit Top" , 
                ratings : 3.5 ,
                price: 52.41,
                brand : "Amazon"
            },

            // product twelve 
            {
                image : "images/top12.PNG" ,
                productName : "Levi's Women's 734900001 LE LS SHIRT" , 
                ratings : 4.5 ,
                price: 87.44,
                brand : "Amazon"
            },

            // product thirteen 
            {
                image : "images/top13.PNG" ,
                productName : "picontshirt Mr Right Mrs Right Black Couple T-Shirts" , 
                ratings : 4.5 ,
                price: 245.98,
                brand : "Amazon"
            },

            // product fourteen 
            {
                image : "images/top14.PNG" ,
                productName : "Long Sleeve Pullover Top Turtleneck T-Shirt" , 
                ratings : 4.5 ,
                price: 100.04,
                brand : "Amazon"
            },

            // product fifteen 
            {
                image : "images/top15.PNG" ,
                productName : "Jueshanzj Mens T-Shirts Slim Fit Round Neck Button Down Tee" , 
                ratings : 4.5 ,
                price: 66.68,
                brand : "Amazon"
            },

            // product sixteen 
            {
                image : "images/top16.PNG" ,
                productName : "Casual Patchwork Slim Hooded Top Blouse" , 
                ratings : 3.0 ,
                price: 68.00,
                brand : "Amazon"
            },

            // product seventeen 
            {
                image : "images/top17.PNG" ,
                productName : "Under Armour Men's Sportstyle Terry Fz Jacket" , 
                ratings : 3.0 ,
                price: 229.09,
                brand : "Amazon"
            },

            // product eighteen 
            {
                image : "images/top18.PNG" ,
                productName : "PUMA Men's ESS+ Heather T-Shirt" , 
                ratings : 4.0 ,
                price: 65.00,
                brand : "Amazon"
            },

            // product nineteen 
            {
                image : "images/top19.PNG" ,
                productName : "2XU Triathlon Training Sport Vests for Men" , 
                ratings : 5.0 ,
                price: 149.00,
                brand : "Amazon"
            },

            // product twenty 
            {
                image : "images/top20.PNG" ,
                productName : "Nike Men's JUST DO IT SWOOSH T-Shirt, White (WHITE)" , 
                ratings : 5.0 ,
                price: 71.00,
                brand : "Amazon"
            },

            // product twenty one 
            {
                image : "images/top21.PNG" ,
                productName : "Inkast Denim Co. Men's Checkered Slim fit Casual Shirt" , 
                ratings : 3.0 ,
                price: 62.58,
                brand : "Amazon"
            },

            // product twenty two 
            {
                image : "images/top22.PNG" ,
                productName : "Diverse Men's Solid Slim Fit Casual Shirt" , 
                ratings : 3.5 ,
                price: 45.87,
                brand : "Amazon"
            },

            // product twenty three 
            {
                image : "images/top23.PNG" ,
                productName : "Tommy Jeans Men's Tjm Essential Tommy Hoodie" , 
                ratings : 4.0 ,
                price: 227.68,
                brand : "Amazon"
            },

            // product twenty four 
            {
                image : "images/top24.PNG" ,
                productName : "Fila Pure Crew Sweatshirt For Men" , 
                ratings : 5.0 ,
                price: 197.00,
                brand : "Amazon"
            },

            // product twenty five 
            {
                image : "images/top25.PNG" ,
                productName : "New Loose Shoulder Dat Shirt Print TShirt" , 
                ratings : 5.0 ,
                price: 65.00,
                brand : "JollyChic"
            },

            // product twenty six 
            {
                image : "images/top26.PNG" ,
                productName : "Women's Shirt Long Sleeve Solid Color Button Stand Collar Top" , 
                ratings : 3.5 ,
                price: 59.00,
                brand : "JollyChic"
            },

            // product twenty seven 
            {
                image : "images/top27.PNG" ,
                productName : "Women's Blouse Loose Three Quarters Sleeve Floral Pattern" , 
                ratings : 5.0 ,
                price: 37.00,
                brand : "JollyChic"
            },

            // product twenty eight 
            {
                image : "images/top28.PNG" ,
                productName : "Women's Shirt Turn Down Collar Checkered Long Sleeve Top" , 
                ratings : 4.5 ,
                price: 37.00,
                brand : "JollyChic"
            },

            // product twenty nine 
            {
                image : "images/top29.PNG" ,
                productName : "Women's Shirt Turn Down Collar Plaid Pattern Long Sleeve Loose" , 
                ratings : 4.5 ,
                price: 37.00,
                brand : "JollyChic"
            },

            // product thirty 
            {
                image : "images/top30.PNG" ,
                productName : "Women's T Shirt Long Sleeve Solid Color Slash Neck Slim" , 
                ratings : 5.0 ,
                price: 48.00,
                brand : "JollyChic"
            },

            // product thirty one 
            {
                image : "images/top31.PNG" ,
                productName : "Women's Knit Top Solid Color Split Turtle Neck Top" , 
                ratings : 3.0 ,
                price: 42.00,
                brand : "JollyChic"
            },

            // product thirty two 
            {
                image : "images/top32.PNG" ,
                productName : "Women's Shirt Long Sleeve Turn Down Collar Waist-tied Stripe Top" , 
                ratings : 4.0 ,
                price: 42.00,
                brand : "JollyChic"
            },

            // product thirty three 
            {
                image : "images/top33.PNG" ,
                productName : "Women's Shirt Stripe Pattern Colorblock Long Sleeve Top" , 
                ratings : 5.0 ,
                price: 37.00,
                brand : "JollyChic"
            },

            // product thirty four 
            {
                image : "images/top34.PNG" ,
                productName : "Women's Shirt Solid Color Turn Down Collar Long Sleeve Casual" , 
                ratings : 5.0 ,
                price: 56.00,
                brand : "JollyChic"
            },

            // product thirty five 
            {
                image : "images/top35.PNG" ,
                productName : "Women's Shirt Long Sleeve Tie Neck Fashion Top" , 
                ratings : 5.0 ,
                price: 63.00,
                brand : "JollyChic"
            },

            // product thirty six
            {
                image : "images/top36.PNG" ,
                productName : "Women's Shirt Long Sleeve Turn Down Collar Plaid Pattern Top" , 
                ratings : 5.0 ,
                price: 53.00,
                brand : "JollyChic"
            },
            // product thirty seven
            {
                image : "images/top37.PNG" ,
                productName : "Men's T Shirt Long Sleeve Solid Slim Turtle Neck Top" , 
                ratings : 4.5 ,
                price: 41.00,
                brand : "JollyChic"
            },
            // product thirty eight
            {
                image : "images/top38.PNG" ,
                productName : "Men's T-Shirt Trendy Letters Pattern Long Sleeve Warm Top" , 
                ratings : 5.0 ,
                price: 70.00,
                brand : "JollyChic"
            },
            // product thirty nine
            {
                image : "images/top39.PNG" ,
                productName : "Men's T Shirt Long-Sleeve Comfortable Fashion Simple" , 
                ratings : 4.5 ,
                price: 59.00,
                brand : "JollyChic"
            },
            // product forty
            {
                image : "images/top40.PNG" ,
                productName : "Men's T-Shirt Hooded Short Sleeve Patchwork Color Block" , 
                ratings : 5.0 ,
                price: 52.00,
                brand : "JollyChic"
            },
            // product forty one
            {
                image : "images/top41.PNG" ,
                productName : "Men's T Shirt Long Sleeve Brief Style Solid Color Fashion T Shirt" , 
                ratings : 4.5 ,
                price: 45.00,
                brand : "JollyChic"
            },
            // product forty two
            {
                image : "images/top42.PNG" ,
                productName : "Men's T Shirt O Neck Short Sleeve Solid Color Zipper Top" , 
                ratings : 4.5 ,
                price: 41.00,
                brand : "JollyChic"
            },
            // product forty three
            {
                image : "images/top43.PNG" ,
                productName : "Men's Tshirt Fashion Solid Color Turtle Neck Long Sleeve Top" , 
                ratings : 4.5 ,
                price: 56.00,
                brand : "JollyChic"
            },
            // product forty four
            {
                image : "images/top44.PNG" ,
                productName : "Men's Rinted T-shirt Summer Short Sleeve" , 
                ratings : 5.0 ,
                price: 108.00,
                brand : "JollyChic"
            },
            // product forty five
            {
                image : "images/top45.PNG" ,
                productName : "Men's T Shirt Piled Collar Short Sleeve Solid Color Slim" , 
                ratings : 3.5 ,
                price: 26.00,
                brand : "JollyChic"
            },
            // product forty six
            {
                image : "images/top46.PNG" ,
                productName : "Men's T Shirt Long Sleeve Hooded Comfortable Top" , 
                ratings : 5.0 ,
                price: 59.00,
                brand : "JollyChic"
            },
            // product forty seven
            {
                image : "images/top47.PNG" ,
                productName : "Men's Shirt Loose Casual Long Sleeve Top" , 
                ratings : 4.5 ,
                price: 89.00,
                brand : "JollyChic"
            },
            // product forty eight
            {
                image : "images/top48.PNG" ,
                productName : "Men's Shirt Fashion Slim And Versatile Solid Color Long Sleeve" , 
                ratings : 5.0 ,
                price: 105.00,
                brand : "JollyChic"
            },

            //-----------------------bottom---------------------------------------------
            // product one 
            {
                image : "images/bottom1.PNG" ,
                productName : "Women's Pencil Pants Solid Color High Waist Casual Skinny Pants" , 
                ratings : 5.0 ,
                price: 34.00,
                brand : "JollyChic"
            },
            // product two 
            {
                image : "images/bottom2.PNG" ,
                productName : "Women's Wide Leg Pants Solid Color Casual All-Match Trousers" , 
                ratings : 3.0 ,
                price: 52.00,
                brand : "JollyChic"
            },
            // product three 
            {
                image : "images/bottom3.PNG" ,
                productName : "Women's Jeans Fashion Holes Patchwork Slim Casual Denim" , 
                ratings : 4.5 ,
                price: 74.00,
                brand : "JollyChic"
            },
            // product four 
            {
                image : "images/bottom4.PNG" ,
                productName : "Women's Jumpsuit Solid Color V Neck Long Sleeve Drawstring" , 
                ratings : 5.0 ,
                price: 59.00,
                brand : "JollyChic"
            },
            // product five 
            {
                image : "images/bottom5.PNG" ,
                productName : "Women's Fashion Sexy Middle Waist Ripped Skinny Jeans" , 
                ratings : 4.5 ,
                price: 53.00,
                brand : "JollyChic"
            },
            // product six 
            {
                image : "images/bottom6.PNG" ,
                productName : "Women's Ankle-tied Pants Solid Color Drawstring Waist" , 
                ratings : 5.0 ,
                price: 67.00,
                brand : "JollyChic"
            },
            // product seven 
            {
                image : "images/bottom7.PNG" ,
                productName : "Women's Jeans Hollow Out Solid Color Frayed Denim Pants" , 
                ratings : 5.0 ,
                price: 70.00,
                brand : "JollyChic"
            },
            // product eight 
            {
                image : "images/bottom8.PNG" ,
                productName : "Women's Pencil Pants Solid Color Slim Fit High Waist Frayed" , 
                ratings : 5.0 ,
                price: 70.00,
                brand : "JollyChic"
            },
            // product nine 
            {
                image : "images/bottom9.PNG" ,
                productName : "Women's Jeans Solid Color Hole Pocket Suspender Denim Pants" , 
                ratings : 5.0 ,
                price: 74.00,
                brand : "JollyChic"
            },
            // product ten 
            {
                image : "images/bottom10.PNG" ,
                productName : "Women's Straight Pants Casual Tight Waist Plaid Pattern" , 
                ratings : 5.0 ,
                price: 67.00,
                brand : "JollyChic"
            },
            // product eleven 
            {
                image : "images/bottom11.PNG" ,
                productName : "Women's Harem Pants Solid Color Elastic Waist Soft Trousers" , 
                ratings : 5.0 ,
                price: 45.00,
                brand : "JollyChic"
            },
            // product twelve 
            {
                image : "images/bottom12.PNG" ,
                productName : "Women's Jeans Frayed Solid Color Slim Fit Denim Pants" , 
                ratings : 5.0 ,
                price: 89.00,
                brand : "JollyChic"
            },
            // product thirteen 
            {
                image : "images/bottom13.PNG" ,
                productName : "Men's Jeans Simple Mid Waist Faddish Jeans" , 
                ratings : 5.0 ,
                price: 74.00,
                brand : "JollyChic"
            },
            // product fourteen 
            {
                image : "images/bottom14.PNG" ,
                productName : "Men Sweatpants Workout Pantalones Hombre Men Joggers" , 
                ratings : 5.0 ,
                price: 57.00,
                brand : "JollyChic"
            },
            // product fifteen 
            {
                image : "images/bottom15.PNG" ,
                productName : "Loose Ice Silk Small Straight Casual Pants Boys Harlan Capris" , 
                ratings : 5.0 ,
                price: 107.00,
                brand : "JollyChic"
            },
            // product sixteen 
            {
                image : "images/bottom16.PNG" ,
                productName : "Men's Jeans Zipper Closure Versatile Holes Casual Denim" , 
                ratings : 3.0 ,
                price: 229.00,
                brand : "JollyChic"
            },
            // product seventeen 
            {
                image : "images/bottom17.PNG" ,
                productName : "Men's Active Pants Fashion Casual Slim Pants" , 
                ratings : 4.0 ,
                price: 70.00,
                brand : "JollyChic"
            },
            // product eighteen 
            {
                image : "images/bottom18.PNG" ,
                productName : "Man's Casual Pants Zipper Pocket Straight Pants" , 
                ratings : 5.0 ,
                price: 45.00,
                brand : "JollyChic"
            },
            // product nineteen 
            {
                image : "images/bottom19.PNG" ,
                productName : "Men's Jeans Hole Decor Faddish Soft Jeans" , 
                ratings : 5.0 ,
                price: 78.00,
                brand : "JollyChic"
            },
            // product twenty 
            {
                image : "images/bottom20.PNG" ,
                productName : "Men's Casual Pants Slim Fit Casual Solid Color Trousers" , 
                ratings : 5.0 ,
                price: 96.00,
                brand : "JollyChic"
            },
            // product twenty one 
            {
                image : "images/bottom21.PNG" ,
                productName : "Men Shorts Men Jogger Shorts Summer Shorts" , 
                ratings : 4.0 ,
                price: 65.00,
                brand : "JollyChic"
            },
            // product twenty two 
            {
                image : "images/bottom22.PNG" ,
                productName : "Men's Cargo Shorts Cotton Blends" , 
                ratings : 5.0 ,
                price: 45.00,
                brand : "JollyChic"
            },
            // product twenty three 
            {
                image : "images/bottom23.PNG" ,
                productName : "Men's Denim Shorts Frayed Hole Elastic Soft Denim Pants" , 
                ratings : 5.0 ,
                price: 96.00,
                brand : "JollyChic"
            },
            // product twenty four 
            {
                image : "images/bottom24.PNG" ,
                productName : "Men's Shorts Fashion Chic Design Print Mid Waist Shorts" , 
                ratings : 4.5 ,
                price: 59.00,
                brand : "JollyChic"
            },
            // product twenty five 
            {
                image : "images/bottom25.PNG" ,
                productName : "Pants Solid Color High Waist Fashion Wide Leg Pants" , 
                ratings : 5.0 ,
                price: 63.00,
                brand : "JollyChic"
            },
            // product twenty six 
            {
                image : "images/bottom26.PNG" ,
                productName : "Jeans Zipper Solid Color High Waist Loose Wide Leg Denim" , 
                ratings : 5.0 ,
                price: 74.00,
                brand : "JollyChic"
            },
            // product twenty seven 
            {
                image : "images/bottom27.PNG" ,
                productName : "Pants Fashion Decorative Pocket Solid Color Trousers" , 
                ratings : 5.0 ,
                price: 45.00,
                brand : "JollyChic"
            },
            // product twenty eight 
            {
                image : "images/bottom28.PNG" ,
                productName : "Women's Shorts Elastic Waist Letters Pattern Fashion Short" , 
                ratings : 5.0 ,
                price: 41.00,
                brand : "JollyChic"
            },
            // product twenty nine 
            {
                image : "images/bottom29.PNG" ,
                productName : "High Waist Loose Solid Color Hole Wide Leg Denim Pants" , 
                ratings : 4.5 ,
                price: 78.00,
                brand : "JollyChic"
            },
            // product thirty  
            {
                image : "images/bottom30.PNG" ,
                productName : "Harem Pants Sports Elastic Waist Decorative Pocket Trousers" , 
                ratings : 5.0 ,
                price: 70.00,
                brand : "JollyChic"
            },
            // product thirty one 
            {
                image : "images/bottom31.PNG" ,
                productName : "Women's Peg Pants Casual Striped High Waist Slim Casual" , 
                ratings : 5.0 ,
                price: 48.00,
                brand : "JollyChic"
            },
            // product thirty two 
            {
                image : "images/bottom32.PNG" ,
                productName : "Women's Harem Pants Pockets Elastic Waist Cargo Trousers" , 
                ratings : 5.0 ,
                price: 59.00,
                brand : "JollyChic"
            },
            // product thirty three 
            {
                image : "images/bottom33.PNG" ,
                productName : "Pants Solid Color Pocket Buttons Fashion Suspender Trousers" , 
                ratings : 5.0 ,
                price: 85.00,
                brand : "JollyChic"
            },
            // product thirty four 
            {
                image : "images/bottom34.PNG" ,
                productName : "Flared Pants Solid Color High Waist Causal Pleuche Trousers" , 
                ratings : 5.0 ,
                price: 78.00,
                brand : "JollyChic"
            },
            // product thirty five 
            {
                image : "images/bottom35.PNG" ,
                productName : "Women's Denim Pants Hole Design Frayed Skinny Jeans" , 
                ratings : 4.5 ,
                price: 78.00,
                brand : "JollyChic"
            },
            // product thirty six 
            {
                image : "images/bottom36.PNG" ,
                productName : "Women's Shorts Frayed Solid Color Button Mid Waist Denim Pants" , 
                ratings : 5.0 ,
                price: 41.00,
                brand : "JollyChic"
            },
            // product thirty seven 
            {
                image : "images/bottom37.PNG" ,
                productName : "Men's Casual Pants Striped Pattern Drawstring Waist" , 
                ratings : 4.5 ,
                price: 63.00,
                brand : "JollyChic"
            },
            // product thirty eight 
            {
                image : "images/bottom38.PNG" ,
                productName : "Men's Casual Pants All-Match Classic Soft Trousers" , 
                ratings : 5.0 ,
                price: 63.00,
                brand : "JollyChic"
            },
            // product thirty nine 
            {
                image : "images/bottom39.PNG" ,
                productName : "Men's Casual Pants Camouflage Pocket Waist Drawstring Trousers" , 
                ratings : 3.0 ,
                price: 30.00,
                brand : "JollyChic"
            },
            // product  fourty 
            {
                image : "images/bottom40.PNG" ,
                productName : "Men's Casual Pants Elastic Waist Patchwork Sports Trousers" , 
                ratings : 5.0 ,
                price: 56.00,
                brand : "JollyChic"
            },
            // product fourty one 
            {
                image : "images/bottom41.PNG" ,
                productName : "Men's Casual Pants Stripe Pattern Casual Drawstring Waist" , 
                ratings : 5.0 ,
                price: 74.00,
                brand : "JollyChic"
            },
            // product fourty two 
            {
                image : "images/bottom42.PNG" ,
                productName : "Men's Active Pants Drawstring Waist" , 
                ratings : 4.0 ,
                price: 52.00,
                brand : "JollyChic"
            },
            // product fourty three 
            {
                image : "images/bottom43.PNG" ,
                productName : "Men's Autumn Pants Straight Casual Pants Student Leggings" , 
                ratings : 3.0 ,
                price: 87.00,
                brand : "JollyChic"
            },
            // product fourty four 
            {
                image : "images/bottom44.PNG" ,
                productName : "Men's Casual Pants Fashion Solid Color Pocket Harem Pants" , 
                ratings : 4.5 ,
                price: 59.00,
                brand : "JollyChic"
            },
            // product fourty five 
            {
                image : "images/bottom45.PNG" ,
                productName : "Men's Jeans Solid Color Casual Fashion Pants" , 
                ratings : 5.0 ,
                price: 78.00,
                brand : "JollyChic"
            },
            // product fourty six 
            {
                image : "images/bottom46.PNG" ,
                productName : "Men's Jeans Solid Color Frayed Slim All Match Fashion Jeans" , 
                ratings : 5.0 ,
                price: 78.00,
                brand : "JollyChic"
            },
            // product fourty seven 
            {
                image : "images/bottom47.PNG" ,
                productName : "Men's Jeans Appliques Frayed Design Pocket Casual" , 
                ratings : 5.0 ,
                price: 85.00,
                brand : "JollyChic"
            },
            // product fourty eight 
            {
                image : "images/bottom48.PNG" ,
                productName : "Men's Slim Ripped Jeans Comfy All Match Plus Size" , 
                ratings : 5.0 ,
                price: 85.00,
                brand : "JollyChic"
            },
            //-------------------------rings--------------------------------------
            // product one 
            {
                image : "images/ring1.PNG" ,
                productName : "Pink Solitaire Ring" , 
                ratings : 3.5 ,
                price: 195.00,
                brand : "Pandora"
            },
            // product two 
            {
                image : "images/ring2.PNG" ,
                productName : "Sparkling Wishbone Heart Ring" , 
                ratings : 4.5 ,
                price: 295.00,
                brand : "Pandora"
            },
            // product three 
            {
                image : "images/ring3.PNG" ,
                productName : "Sparkling Blue Elevated Heart" , 
                ratings : 4.5 ,
                price: 445.00,
                brand : "Pandora"
            },
            // product four 
            {
                image : "images/ring4.PNG" ,
                productName : "Disney Cinderella Blue Tiara Ring" , 
                ratings : 4.5 ,
                price: 295.00,
                brand : "Pandora"
            },
            // product five 
            {
                image : "images/ring5.PNG" ,
                productName : "Pink Sparkling Crown Solitaire" , 
                ratings : 4.5 ,
                price: 395.00,
                brand : "Pandora"
            },
            // product six 
            {
                image : "images/ring6.PNG" ,
                productName : "Crossover Pavé Triple Band Ring" , 
                ratings : 5.0 ,
                price: 495.00,
                brand : "Pandora"
            },
            // product seven 
            {
                image : "images/ring7.PNG" ,
                productName : "ANGELIC RING, BLUE, RHODIUM" , 
                ratings : 4.5 ,
                price: 755.00,
                brand : "Swarovski"
            },
            // product eight 
            {
                image : "images/ring8.PNG" ,
                productName : "VITTORE PEAR RING" , 
                ratings : 5.0 ,
                price: 655.00,
                brand : "Swarovski"
            },
            // product nine 
            {
                image : "images/ring9.PNG" ,
                productName : "TWIST ROWS RING" , 
                ratings : 5.0 ,
                price: 455.00,
                brand : "Swarovski"
            },
            // product ten 
            {
                image : "images/ring10.PNG" ,
                productName : "LIFELONG HEART RING" , 
                ratings : 4.5 ,
                price: 404.00,
                brand : "Swarovski"
            },
            // product eleven 
            {
                image : "images/ring11.PNG" ,
                productName : "I DO RING SET" , 
                ratings : 5.0 ,
                price: 655.00,
                brand : "Swarovski"
            },
            // product twelve 
            {
                image : "images/ring12.PNG" ,
                productName : "RARE RING" , 
                ratings : 3.0 ,
                price: 300.00,
                brand : "Swarovski"
            },
            // product thirteen 
            {
                image : "images/ring13.PNG" ,
                productName : "Sparkling Double Wishbone Ring" , 
                ratings : 5.0 ,
                price: 595.00,
                brand : "Pandora"
            },
            // product fourteen 
            {
                image : "images/ring14.PNG" ,
                productName : "Pear & Marquise Wishbone Ring" , 
                ratings : 3.5 ,
                price: 395.00,
                brand : "Pandora"
            },
            // product fifteen 
            {
                image : "images/ring15.PNG" ,
                productName : "Wrapped Open Infinity Ring" , 
                ratings : 3.0 ,
                price: 345.00,
                brand : "Pandora"
            },
            // product sixteen 
            {
                image : "images/ring16.PNG" ,
                productName : "Freehand Hearts Ring" , 
                ratings : 3.0 ,
                price: 245.00,
                brand : "Pandora"
            },
            // product seventeen 
            {
                image : "images/ring17.PNG" ,
                productName : "Sparkling Twisted Lines Ring" , 
                ratings : 4.0 ,
                price: 595.00,
                brand : "Pandora"
            },
            // product eighteen 
            {
                image : "images/ring18.PNG" ,
                productName : "Two Sparkling Hearts Ring" , 
                ratings : 4.5 ,
                price: 345.00,
                brand : "Pandora"
            },
            // product nineteen 
            {
                image : "images/ring19.PNG" ,
                productName : "LIFELONG MEDIUM BOW RING" , 
                ratings : 4.0 ,
                price: 364.00,
                brand : "Swarovski"
            },
            // product twenty 
            {
                image : "images/ring20.PNG" ,
                productName : "TAHLIA RING" , 
                ratings : 3.0 ,
                price: 300.00,
                brand : "Swarovski"
            },
            // product twenty one 
            {
                image : "images/ring21.PNG" ,
                productName : "TWIST WRAP RING" , 
                ratings : 4.0 ,
                price: 860.00,
                brand : "Swarovski"
            },
            // product twenty two
            {
                image : "images/ring22.PNG" ,
                productName : "ATTRACT SOUL HEART RING" , 
                ratings : 4.5 ,
                price: 405.00,
                brand : "Swarovski"
            },
            // product twenty three 
            {
                image : "images/ring23.PNG" ,
                productName : "ATTRACT PEAR RING SET" , 
                ratings : 5.0 ,
                price: 505.00,
                brand : "Swarovski"
            },
            // product twenty four 
            {
                image : "images/ring24.PNG" ,
                productName : "SWAROVSKI INFINITY RING" , 
                ratings : 4.0 ,
                price: 350.00,
                brand : "Swarovski"
            },
            // product twenty five 
            {
                image : "images/ring25.PNG" ,
                productName : "Cross Ring Female Wind Japanese Light Luxury" , 
                ratings : 3.0 ,
                price: 61.00,
                brand : "JollyChic"
            },
            // product twenty six 
            {
                image : "images/ring26.PNG" ,
                productName : "Creative Imitation Rhinestone Butterfly Shape Ring" , 
                ratings : 3.0 ,
                price: 26.00,
                brand : "JollyChic"
            },
            // product twenty seven 
            {
                image : "images/ring27.PNG" ,
                productName : "Sterling Silver Custom Bead Bead Line Irregular Ring" , 
                ratings : 5.0 ,
                price: 37.00,
                brand : "JollyChic"
            },
            // product twenty eight 
            {
                image : "images/ring28.PNG" ,
                productName : "7Pcs Ring Set Fashion Simple Crystal Decoration Rings" , 
                ratings : 3.0 ,
                price: 28.00,
                brand : "JollyChic"
            },
            // product twenty nine 
            {
                image : "images/ring29.PNG" ,
                productName : "Women's Fashion Ring Luxury Rhinestone Decor Geometry" , 
                ratings : 4.0 ,
                price: 15.00,
                brand : "JollyChic"
            },
            // product thirty 
            {
                image : "images/ring30.PNG" ,
                productName : "Hollow Butterfly Ring for Women Adjustable Open Design" , 
                ratings : 4.0 ,
                price: 24.00,
                brand : "JollyChic"
            },
            // product thirty one 
            {
                image : "images/ring31.PNG" ,
                productName : "Real Gold Plating Full Diamond Opening Adjustable Ring" , 
                ratings : 3.5 ,
                price: 28.00,
                brand : "JollyChic"
            },
            // product thirty two 
            {
                image : "images/ring32.PNG" ,
                productName : "1 Piece Women's Fashion Ring Rhinestone Decor Creative" , 
                ratings : 1.5 ,
                price: 19.00,
                brand : "JollyChic"
            },
            // product thirty three 
            {
                image : "images/ring33.PNG" ,
                productName : "Women's Fashion Ring Butterfly Exaggerate Rhinestone" , 
                ratings : 4.0 ,
                price: 26.00,
                brand : "JollyChic"
            },
            // product thirty four 
            {
                image : "images/ring34.PNG" ,
                productName : "Diamond Wedding Rings, Bracelet, Hearts, Arrows" , 
                ratings : 4.0 ,
                price: 19.00,
                brand : "JollyChic"
            },
            // product thirty five 
            {
                image : "images/ring35.PNG" ,
                productName : "Women's Stars Double Fashion Open Ring" , 
                ratings : 5.0 ,
                price: 44.00,
                brand : "JollyChic"
            },
            // product thirty six 
            {
                image : "images/ring36.PNG" ,
                productName : "Fashion Metal Opening Droplet Lava Pearl Ring" , 
                ratings : 4.0 ,
                price: 59.00,
                brand : "JollyChic"
            },
            // ===================jackets================
            //product one
            {
                image : "images/jacket1.PNG",
                productName : "Women's Synthetic Leather Jacket Solid Color Long Sleeve",
                ratings : 4.0,
                price: "AED 133.00",
                brand : "Urban Fashion"
            },
            //product two
            {
                image : "images/jacket2.PNG",
                productName : "Women's Jacket Solid Color Long Sleeve Pocket Hooded",
                ratings : 4.0,
                price: "AED 52.00",
                brand : "Urban Fashion"
            },
            //product three
            {
                image : "images/jacket3.PNG",
                productName : "Women's Bomber Jacket Letters Pattern Hooded Casual Jacket",
                ratings : 3.5,
                price: "AED 63.00",
                brand : "Urban Fashion"
            },
            //product four
            {
                image : "images/jacket4.PNG",
                productName : "Women's Synthetic Leather Jacket Zipper Long Sleeve",
                ratings : 5.0,
                price: "AED 42.00",
                brand : "Urban Fashion"
            },
            //product five
            {
                image : "images/jacket5.PNG",
                productName : "Women's Denim Jacket Long Sleeve Thicken Turn Down Collar",
                ratings : 5.0,
                price: "AED 102.00",
                brand : "Urban Fashion"
            },
            //product six
            {
                image : "images/jacket6.PNG",
                productName : "Women's Synthetic Leather Jacket Fleece Thicken Slim Fit ",
                ratings : 5.0,
                price: "AED 118.00",
                brand : "Urban Fashion"
            },
            //product seven
            {
                image : "images/jacket7.PNG",
                productName : "Women's Denim Coat Imitation Pearl Long Sleeve Single",
                ratings : 4.5,
                price: "AED 125.00",
                brand : "Urban Fashion"
            },
            //product eight
            {
                image : "images/jacket8.PNG",
                productName : "Women's Wool Blend Coat Solid Color Long Sleeve",
                ratings : 5.0,
                price: "AED 209.99",
                brand : "Urban Fashion"
            },
            //product nine
            {
                image : "images/jacket9.PNG",
                productName : "Women's Wool Blend Coat Solid Color Double Breasted Overcoat",
                ratings : 5.0,
                price: "AED 211.00",
                brand : "Urban Fashion"
            },
            //product ten
            {
                image : "images/jacket10.PNG",
                productName : "Women's Wool Blend Coat Solid Color Long Sleeve Notched",
                ratings : 5.0,
                price: "AED 109.99",
                brand : "Urban Fashion"
            },
            //product eleven
            {
                image : "images/jacket11.PNG",
                productName : "Women's Biker Jacket Solid Color Long Sleeve Street Style PU Jacket",
                ratings : 5.0,
                price: "AED 111.00",
                brand : "Urban Fashion"
            },
            //product twelve
            {
                image : "images/jacket12.PNG",
                productName : "Women's Vest Jacket Plaid Pattern Single Breasted Fashion Vest Jacket",
                ratings : 5.0,
                price: "AED 114.99",
                brand : "Urban Fashion"
            },
            // ====== page 2 =====
            //product thirteen
            {
                image : "images/jacket13.PNG",
                productName : "Men's Trench Coats Turn Down Collar Polyester",
                ratings : 5.0,
                price: "AED 107.00",
                brand : "Urban Fashion"
            },
            //product fourteen
            {
                image : "images/jacket14.PNG",
                productName : "Men's Casual Jacket Solid Color Zipper Pocket Fashion Outerwear",
                ratings : 4.0,
                price: "AED 61.00",
                brand : "Urban Fashion"
            },
            //product fifteen
            {
                image : "images/jacket15.PNG",
                productName : "Men's Sun-Protective Jacket Fashion Long Sleeve Stand Collar",
                ratings : 5.0,
                price: "AED 65.00",
                brand : "Urban Fashion"
            },
            //product sixteen
            {
                image : "images/jacket16.PNG",
                productName : "Men's Quilted Coat Fashion Casual Solid Color Outerwear",
                ratings : 5.0,
                price: "AED 262.00",
                brand : "Urban Fashion"
            },
            //product seventeen
            {
                image : "images/jacket17.PNG",
                productName : "Men's Casual Jacket Fashion Long Sleeve Loose Jacket",
                ratings : 4.0,
                price: "AED 78.00",
                brand : "Urban Fashion"
            },
            //product eighteen
            {
                image : "images/jacket18.PNG",
                productName : "SEMIR Men's Denim Jacket Hooded Single-Breasted Pocket",
                ratings : 5.0,
                price: "AED 89.00",
                brand : "Urban Fashion"
            },
            //product nineteen
            {
                image : "images/jacket19.PNG",
                productName : "Deerskin Coat Men's Spring And Autumn 2020 New",
                ratings : 5.0,
                price: "AED 203.00",
                brand : "Urban Fashion"
            },
            //product twenty
            {
                image : "images/jacket20.PNG",
                productName : "2020 New Autumn Coat Men's Fashion Leather Jacket Men's Youth",
                ratings : 5.0,
                price: "AED 227.00",
                brand : "Urban Fashion"
            },
            //product twenty one
            {
                image : "images/jacket21.PNG",
                productName : "Men's Casual Jacket Simple Solid Color Hooded",
                ratings : 4.0,
                price: "AED 100.00",
                brand : "Urban Fashion"
            },
            //product twenty two
            {
                image : "images/jacket22.PNG",
                productName : "Men's Denim Jacket Oversized Single Breasted Comfortable",
                ratings : 4.5,
                price: "AED 96.00",
                brand : "Urban Fashion"
            },
            //product twenty three
            {
                image : "images/jacket23.PNG",
                productName : "Men's Quilted Coat Hooded Zipper Solid Color Winter Coat",
                ratings : 5.0,
                price: "AED 207.50",
                brand : "Urban Fashion"
            },
            //product twenty four
            {
                image : "images/jacket24.PNG",
                productName : "Men's New Denim Jacket Denim Jacket ",
                ratings : 5.0,
                price: "AED 258.00",
                brand : "Urban Fashion"
            },
            // ====== page 3 =====
            //product twenty five
            {
                image : "images/jacket25.PNG",
                productName : "Women's Vest Jacket Patchwork Pocket Reversible Zipper Warm",
                ratings : 5.0,
                price: "AED 93.99",
                brand : "Urban Fashion"
            },
            //product twenty six
            {
                image : "images/jacket26.PNG",
                productName : "Women's Vest Jacket Solid Color Stand Collar Quilted Vest Jacket",
                ratings : 5.0,
                price: "AED 93.99",
                brand : "Urban Fashion"
            },
            //product twenty seven
            {
                image : "images/jacket27.PNG",
                productName : "Women's Jacket Long Sleeve Houndstooth Patchwork Fleece ",
                ratings : 5.0,
                price: "AED 140.00",
                brand : "Urban Fashion"
            },
            //product twenty eight
            {
                image : "images/jacket28.PNG",
                productName : "Women's Biker Jacket Zippered Long Sleeve Solid Color Street",
                ratings : 5.0,
                price: "AED 89.99",
                brand : "Urban Fashion"
            },
            //product twenty nine
            {
                image : "images/jacket29.PNG",
                productName : "Women's Biker Jacket Solid Color Long Sleeve Plush Jacket",
                ratings : 5.0,
                price: "AED 78.00",
                brand : "Urban Fashion"
            },
            //product thirty
            {
                image : "images/jacket30.PNG",
                productName : "Women's Biker Jacket Solid Color Turn Down Collar Long",
                ratings : 5.0,
                price: "AED 82.00",
                brand : "Urban Fashion"
            },
            //product thirty one
            {
                image : "images/jacket31.PNG",
                productName : "Women's Biker Jacket Solid Color Long Sleeve Street Style PU",
                ratings : 5.0,
                price: "AED 111.00",
                brand : "Urban Fashion"
            },
            //product thirty two
            {
                image : "images/jacket32.PNG",
                productName : "Women's Biker Jacket Leopard Pattern Long Sleeve Zipper Jacket",
                ratings : 5.0,
                price: "AED 78.00",
                brand : "Urban Fashion"
            },
            //product thirty three
            {
                image : "images/jacket33.PNG",
                productName : "Women's Vest Jacket Color Block Open Front Reversible",
                ratings : 5.0,
                price: "AED 63.00",
                brand : "Urban Fashion"
            },
            //product thirty four
            {
                image : "images/jacket34.PNG",
                productName : "Women's Vest Jacket Fashion Horn Button Pocket",
                ratings : 5.0,
                price: "AED 145.00",
                brand : "Urban Fashion"
            },
            //product thirty five
            {
                image : "images/jacket35.PNG",
                productName : "Women's Jacket Hooded Long Sleeve Pocket Causal Outerwear",
                ratings : 5.0,
                price: "AED 104.00",
                brand : "Urban Fashion"
            },
            //product thirty six
            {
                image : "images/jacket36.PNG",
                productName : "Women's Vest Jacket Stand Collar Solid Color Quilted Vest",
                ratings : 5.0,
                price: "AED 112.99",
                brand : "Urban Fashion"
            },
];


var page = [ 1 , 2 , 3 , 4 ];

CategoryList.sort(() => Math.ceil(12)); 

window.onload = function() {

    const tab_switchers = document.querySelectorAll("[data-switcher]");

    for(let i = 0 ; i < tab_switchers.length ; i++){
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab; 

        tab_switcher.addEventListener("click", ()=>{
            document.querySelector(".tabs .tab.is-active").classList.remove("is-active");
            tab_switcher.parentNode.classList.add("is-active");

            switchPage(page_id);
        })
    }

    function switchPage(page_id){
        const currentPage = document.querySelector(".pages .Row4.is-active");
        currentPage.classList.remove("is-active");

        const nextPage = document.querySelector(`.pages .Row4[data-page="${page_id}"]`);
        nextPage.classList.add("is-active");

    }
    
    var MainContainer = document.querySelector('.Row4');
    var top = document.querySelectorAll("#top");
    var bottom = document.querySelectorAll("ul #bottom");
    var jackets = document.querySelectorAll("ul #jacket");
    var Shoes = document.querySelectorAll("ul #shoes");
    var rings  = document.querySelectorAll("ul #ring");
    var necklaces = document.querySelectorAll("ul #necklace");
    var watches = document.querySelectorAll("ul #watches");
    var bracelets = document.querySelectorAll("ul #bracelets");
    var nightWears = document.querySelectorAll("ul #night_wears");
    var sales = document.querySelectorAll("ul #sale");
    //page
    var pageOne = document.querySelectorAll("#page1");
    var pageTwo = document.querySelectorAll("#page2");
    var pageThree = document.querySelectorAll("#page3");
    var pageFour = document.querySelectorAll("#page4");
    var nextPage = document.querySelectorAll("#pageNext")
    //page
    var headings = document.getElementById("heading");
    var sortBy = document.getElementById('sorting');
    // var resetss = document.getElementById("reset");
    var menu = document.querySelectorAll(".categoryListt li");
    var images = document.createElement("img");

    for(let i = 0 , len = top.length ; i < len ; i++)

    menu.forEach(anything => {

        anything.addEventListener("mousedown" , () => {

            MainContainer.innerHTML = "";

            top[i].classList.remove("active_nav_link");
            bottom[i].classList.remove("active_nav_link");
            jackets[i].classList.remove("active_nav_link");
            Shoes[i].classList.remove("active_nav_link");
            rings[i].classList.remove("active_nav_link");
            necklaces[i].classList.remove("active_nav_link");
            watches[i].classList.remove("active_nav_link");
            bracelets[i].classList.remove("active_nav_link");
            nightWears[i].classList.remove("active_nav_link");
            sales[i].classList.remove("active_nav_link");
        });

        anything.addEventListener("mouseover", ()=>{
            MainContainer.classList.add("image-darken");
        })

        anything.addEventListener("mouseout", ()=>{
            MainContainer.classList.remove("image-darken");
        })

    })

    //tops
    for(let i = 0 , len = top.length ; i < len ; i++)
    
     (function(index){

        top[i].onclick = function(){

            top[i].classList.add("active_nav_link");

            // this.onclick=null;

            headings.innerText = "Tops";
            // var MainContainer = document.getElementsByClassName('Row');
            
            for(let i = 0 ; i < CategoryList.length ; i++){

                if (CategoryList[i] === CategoryList[48]) break

                //creating element
                var Container = document.createElement("div");
                var images = document.createElement("img");
                var name = document.createElement("h4");
                var rating = document.createElement("h4");
                var prices = document.createElement("p");
                var brandname = document.createElement("h4");

                //adding class of col-4 to div
                Container.classList.add("col-4");

                images.src = CategoryList[i].image;
                name.innerText = CategoryList[i].productName;
                rating.innerText = CategoryList[i].ratings;
                prices.innerText = CategoryList[i].price;
                brandname.innerText = CategoryList[i].brand;

                Container.appendChild(images);
                Container.appendChild(name);
                Container.appendChild(rating);
                Container.appendChild(prices);
                Container.appendChild(brandname);
        
                //adding newpost to postimage (ParentElement)
                MainContainer.appendChild(Container);  
            }
        }

    })(i)

    //top page 2
        for (var i = 0; i < CategoryList.length; i++) {
            if(CategoryList[i] === CategoryList[48]) break

                //creating element
                var Container = document.createElement("div");
                var images = document.createElement("img");
                var name = document.createElement("h4");
                var rating = document.createElement("h4");
                var prices = document.createElement("p");
                var brandname = document.createElement("h4");

                //adding class of col-4 to div
                Container.classList.add("col-4");

                images.src = CategoryList[i].image;
                name.innerText = CategoryList[i].productName;
                rating.innerText = CategoryList[i].ratings;
                prices.innerText = CategoryList[i].price;
                brandname.innerText = CategoryList[i].brand;

                Container.appendChild(images);
                Container.appendChild(name);
                Container.appendChild(rating);
                Container.appendChild(prices);
                Container.appendChild(brandname);

                MainContainer.appendChild(Container);
        }

     //bottom
    for(let i = 0, len = bottom.length ; i < len ; i++)

    (function(index){

        bottom[i].onclick = function (){

            bottom[i].classList.add("active_nav_link");

            headings.innerText = "Bottoms";
            // var MainContainer = document.getElementsByClassName('Row');
            
            for(let y = 48; y < CategoryList.length ; y++){ 

                if (CategoryList[y] === CategoryList[96]) break
                //creating element
                var Container = document.createElement("div");
                var images = document.createElement("img");
                var name = document.createElement("h4");
                var rating = document.createElement("h4");
                var prices = document.createElement("p");
                var brandname = document.createElement("h4");

                //adding class of col-4 to div
                Container.classList.add("col-4");

                images.src = CategoryList[y].image;
                name.innerText = CategoryList[y].productName;
                rating.innerText = CategoryList[y].ratings;
                prices.innerText = CategoryList[y].price;
                brandname.innerText = CategoryList[y].brand;

                Container.appendChild(images);
                Container.appendChild(name);
                Container.appendChild(rating);
                Container.appendChild(prices);
                Container.appendChild(brandname);
        
                //adding newpost to postimage (ParentElement)
                MainContainer.appendChild(Container);
            
            }

        }

    })(i)

    //jackets
    for(let i = 0 , len = jackets.length ; i < len ; i++)

    (function(index){

        jackets[i].onclick = function (){

            jackets[i].classList.add("active_nav_link");

            headings.innerText = "Jackets";

            for (let i = 132; i < CategoryList.length; i++) {
                
                if(CategoryList[i] === CategoryList[180]) break

                    var Container = document.createElement("div");
                    var images = document.createElement("img");
                    var prices = document.createElement("p");
                    var rating = document.createElement("h4");
                    var name = document.createElement("h4");
                    var brandname = document.createElement("h4");

                    Container.classList.add("col-4");

                    images.src = CategoryList[i].image;
                    name.innerText = CategoryList[i].productName;
                    rating.innerText = CategoryList[i].ratings;
                    prices.innerText = CategoryList[i].price;
                    brandname.innerText = CategoryList[i].brand;

                    Container.appendChild(images);
                    Container.appendChild(name);
                    Container.appendChild(rating);
                    Container.appendChild(prices);
                    Container.appendChild(brandname);

                    MainContainer.appendChild(Container);
            }
        }
    })(i)

    //Shoes
    for (let i = 0 , len = Shoes.length ; i < len ; i++)

    (function(index){

        Shoes[i].onclick = function (){

            Shoes[i].classList.add("active_nav_link");

            headings.innerText = "Shoes";
        }
    })(i)

    
    //Ring
    for(let i = 0, len = rings.length ; i < len ; i++)

    (function(index){
        rings[i].onclick = function (){

            rings[i].classList.add("active_nav_link");

            // this.onclick=null;

            headings.innerText = "Rings";
            // var MainContainer = document.getElementsByClassName('Row');
            
            for(let z = 96; z < CategoryList.length ; z++){
                //creating element
                var Container = document.createElement("div");
                var images = document.createElement("img");
                var name = document.createElement("h4");
                var rating = document.createElement("h4");
                var prices = document.createElement("p");
                var brandname = document.createElement("h4");

                //adding class of col-4 to div
                Container.classList.add("col-4");

                images.src = CategoryList[z].image;
                name.innerText = CategoryList[z].productName;
                rating.innerText = CategoryList[z].ratings;
                prices.innerText = CategoryList[z].price;
                brandname.innerText = CategoryList[z].brand;

                Container.appendChild(images);
                Container.appendChild(name);
                Container.appendChild(rating);
                Container.appendChild(prices);
                Container.appendChild(brandname);
        
                //adding newpost to postimage (ParentElement)
                MainContainer.appendChild(Container);
            
            }
        }

    })(i)

    //Necklaces
    for(let i = 0 , len = necklaces.length ; i < len ; i++)

    (function(index){

        necklaces[i].onclick = function(){

            necklaces[i].classList.add("active_nav_link");

            headings.innerText = "Necklaces";
        }
    })(i)

    //Watches
    for(let i=0 , len = watches.length ; i < len ; i++)

    (function(index){

        watches[i].onclick = function(){

            watches[i].classList.add("active_nav_link");

            headings.innerText = "Watches";
        }
    })(i)

    //bracelets

    for(let i = 0 , len = bracelets.length ; i < len ; i++)

    (function(index){

        bracelets[i].onclick = function(){

            bracelets[i].classList.add("active_nav_link");

            headings.innerText = "Bracelets";
        }
    })(i)

    //Night Wears
    for(let i = 0 , len = nightWears.length ; i < len ; i++)

    (function(index){

        nightWears[i].onclick = function(){

            nightWears[i].classList.add("active_nav_link");

            headings.innerText = "Night Wears";
        }
    })(i)

    // product on sale
    for(let i=0 , len = sales.length ; i < len ; i++)

    (function(index){

        sales[i].onclick = function(){

            sales[i].classList.add("active_nav_link");

            headings.innerText = "Sales"
        }
    })(i)

    
}

});