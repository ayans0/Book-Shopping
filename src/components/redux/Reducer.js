import { ADD_ADVENTURE_TO_CART, ADD_ADVENTURE_TO_LIST, ADD_BOOKS_TO_CART, ADD_BOOKS_TO_LIST, ADD_CLASSIC_TO_CART, ADD_CLASSIC_TO_LIST, ADD_DETECTIVE_TO_CART, ADD_DETECTIVE_TO_LIST, ADD_PHILOSOPHY_TO_CART, ADD_PHILOSOPHY_TO_LIST, ADD_POEM_TO_CART, ADD_POEM_TO_LIST, ADD_PSYCHOLOGY_TO_CART, ADD_PSYCHOLOGY_TO_LIST, ADD_ROMANCE_TO_CART, ADD_ROMANCE_TO_LIST, ADD_SCIENCE_TO_CART, ADD_SCIENCE_TO_LIST, ADD_THRILLER_TO_CART, ADD_THRILLER_TO_LIST, REMOVE_FROM_CART, REMOVE_FROM_LIST, RESET_CART, RESET_LIST } from "./ActionsNames"

const initial_state = {
    books: [{
            img_url: "/images/611X8GI7hpL._AC_UL254_SR254,254_.jpg",
            book_name: "The 48 Laws of Power",
            price: 14.65,

        },
        {
            img_url: "/images/915MRWllanL._AC_UL381_SR381,381_.jpg",
            book_name: "Rhett & Link Present",
            price: 22.75,

        },
        {
            img_url: "/images/51WABgZmdWL._AC_UL381_SR381,381_.jpg",
            book_name: "Chicka Chicka Boom Boom",
            price: 3.67,

        },
        {
            img_url: "/images/81o-aeyR22L._AC_UL210_SR195,210_.jpg",
            book_name: "The House of Hidden Meanings: A Memoir",
            price: 15.53,

        },
        {
            img_url: "/images/81qlpis8AFL._AC_UL381_SR381,381_.jpg",
            book_name: "Good Lookin' Cookin'",
            price: 35.00,

        },
        {
            img_url: "/images/71CX11nGhWL._AC_UL381_SR381,381_.jpg",
            book_name: "Oath and Honor: A Memoir and a Warning",
            price: 20.88,
        },
        {
            img_url: "images/71EJeWqNPLL._AC_UL381_SR381,381_.jpg",
            book_name: "Frank Herbert's Dune Saga 3-Book Boxed Set",
            price: 16.28,

        },
        {
            img_url: "images/71ihGxMQEBL._AC_UL381_SR381,381_.jpg",
            book_name: "It's Not Easy Being a Bunny",
            price: 5.98,

        },
        {
            img_url: "images/71o+OI3MthL._AC_UL381_SR381,381_.jpg",
            book_name: "10% Happier 10th Anniversary",
            price: 14.31,

        },
        {
            img_url: "images/71Pu10o+WLL._AC_UL254_SR254,254_.jpg",
            book_name: "The Idea of You: A Novel",
            price: 12.33,

        },
        {
            img_url: "images/81AHTyq2wVL._AC_UL254_SR254,254_.jpg",
            book_name: "The Housemaid",
            price: 8.11,

        },
        {
            img_url: "/images/81JL3vN6voL._AC_UL381_SR381,381_.jpg",
            book_name: "Blood Money",
            price: 20.21,

        },
        {
            img_url: "/images/81NsX5gOJkL._AC_UL127_SR127,127_.jpg",
            book_name: "Taylor Swift",
            price: 4.78,

        },
        {
            img_url: "/images/71mk3QYswYL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Mr Wrong Number",
            price: 20.13,

        },
        {
            img_url: "images/81TmnPZWb0L._AC_UL127_SR127,127_.jpg",
            book_name: "Dune (Dune Chronicles, Book 1)",
            price: 10.90,

        },
        {
            img_url: "/images/81YkqyaFVEL._AC_UL381_SR381,381_.jpg",
            book_name: "Atomic Habits",
            price: 13.79,

        },
        {
            img_url: "/images/913C+MR3S5L._AC_UL210_SR195,210_.jpg",
            book_name: "The Women: A Novel",
            price: 18.49,

        },
    ],
    adventures: [{
            img_url: "/images/51FR-HTEILL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Dead Mountain",
            price: 10.65,

        },
        {
            img_url: "/images/61B8OOZoGqL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Turning Feral",
            price: 14.70,

        },
        {
            img_url: "/images/61-eg9kdgiL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Shadow Jumper",
            price: 20.65,

        },
        {
            img_url: "/images/61Hihrq+JkL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Campground kids",
            price: 7.30,

        },
        {
            img_url: "/images/71cskaRUTtL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Survival Stories",
            price: 20.50,

        },
        {
            img_url: "/images/71GLvu++FNL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The Key House",
            price: 25.65,

        },
        {
            img_url: "/images/71je-ImEZ9L._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Math Inspectors",
            price: 10.40,

        },
        {
            img_url: "/images/71o+xnamAQL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Magic of Light",
            price: 10.00,

        },
        {
            img_url: "/images/71O00-lohOL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Bad Karma",
            price: 14.65,

        },
        {
            img_url: "/images/71r7l0DK65L._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Exploration Stories",
            price: 25.95,

        },
        {
            img_url: "/images/71WCcsmnHcL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The Island",
            price: 10.65,

        },
        {
            img_url: "/images/71YXpinaGVL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Take the Path of Most Resistance",
            price: 20.00,

        },
        {
            img_url: "/images/81BD5-A7iIL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Mountain Men",
            price: 19.65,

        },
        {
            img_url: "/images/81cc7Zt6fvL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The Secret",
            price: 20.15,

        },
        {
            img_url: "/images/81dW0Z20itL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Ascendant",
            price: 14.65,

        },
        {
            img_url: "/images/81IQZIjsyFL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The Seattle",
            price: 20.65,

        },
        {
            img_url: "/images/81W79e8OJkL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Epic Journeys",
            price: 20.00,

        },
        {
            img_url: "/images/81yhlUsSMAL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "I have bad feeling about this",
            price: 13.65,
        },
        {
            img_url: "/images/81ZWGe8feZL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The Essential Skills",
            price: 14.65,

        },
        {
            img_url: "/images/91CuGMDVzML._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Into the ABYSS",
            price: 23.00,

        },
        {
            img_url: "/images/91hND+Mxz4L._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Endurance",
            price: 14.45,

        },
        {
            img_url: "/images/91q0TiKgbaL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Swords of Empire",
            price: 24.65,

        },

        {
            img_url: "/images/91W8IaQemKL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Island of Lost",
            price: 14.15,

        },
        {
            img_url: "/images/617uSDDaqVL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Only When I Step On It",
            price: 24.65,

        },
        {
            img_url: "/images/618aWMTuJpL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Legacy of Honor",
            price: 12.15,

        },
        {
            img_url: "/images/711j60bSaGL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Secret Lake",
            price: 14.65,

        },
        {
            img_url: "/images/715Lge-WQPL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Beer Run",
            price: 20.25,

        },
        {
            img_url: "/images/914mmIjgE1L._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Bonny Hood",
            price: 14.65,

        },
        {
            img_url: "/images/8100uCyFflL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Corsican Shadow",
            price: 21.65,

        }
    ],
    classic: [{
            img_url: "/classic/51neI+ff8fL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Mr.Hyde",
            price: 10.65,

        },
        {
            img_url: "/classic/51RcuPqc+lL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The Count of Monte Cristo",
            price: 4.70,

        },
        {
            img_url: "/classic/51wpHJcz3LL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Attic Nights",
            price: 4.60,

        },
        {
            img_url: "/classic/61uZMVayn2L._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Huckleberry Finn",
            price: 14.70,

        },
        {
            img_url: "/classic/61+KbxkEhJL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Moby Dick",
            price: 3.70,

        },
        {
            img_url: "/classic/61z0MrB6qOS._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The Great Gatsby",
            price: 8.50,

        },
        {
            img_url: "/classic/61z7RDG3OIL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Fahrenheit",
            price: 8.70,

        },
        {
            img_url: "/classic/71Bg39CmhoL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Treasury of Knowledge",
            price: 10.70,

        },
        {
            img_url: "/classic/71Djqom1jRL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Crime and Punishment",
            price: 9.70,

        },
        {
            img_url: "/classic/71epOLG+TML._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The Four Books",
            price: 13.90,

        },
        {
            img_url: "/classic/71je3-DsQEL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Animal Farm",
            price: 3.90,

        },
        {
            img_url: "/classic/71lu84-hR+L._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The Boy in the Striped Pyjamas",
            price: 6.30,

        },
        {
            img_url: "/classic/71nXPGovoTL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The Catcher in the Rye",
            price: 8.90,

        },
        {
            img_url: "/classic/71rpa1-kyvL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "1984",
            price: 2.90,

        },
        {
            img_url: "/classic/71xXwHUrsxL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The Mice and Men",
            price: 10.90,

        },
        {
            img_url: "/classic/71zHDXu1TaL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The Alchemist",
            price: 7.00,

        },
        {
            img_url: "/classic/81aY1lxk+9L._AC_UL640_FMwebp_QL65_.webp",
            book_name: "To Kill a Mockingbird",
            price: 10.90,

        },
        {
            img_url: "/classic/81DFDGzHZqL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Meditations",
            price: 13.90,

        },
        {
            img_url: "/classic/81NLDvyAHrL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Pride and Prejudice",
            price: 15.90,

        },
        {
            img_url: "/classic/81oqdz4hkeL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "A Wrinkle in Time",
            price: 7.00,

        },
        {
            img_url: "/classic/81pidJgAGdL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Music Study in Germany",
            price: 11.90,

        },
        {
            img_url: "/classic/81pkNSvYgJL._AC_UL640_QL65_T2F_.jpg",
            book_name: "Bridge Terabithia",
            price: 13.90,

        },
        {
            img_url: "/classic/81PvdrKD+6L._AC_UL640_FMwebp_QL65_.webp",
            book_name: "A Tree grows in Brooklyn",
            price: 15.90,

        },
        {
            img_url: "/classic/81t+rLoUAzL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "All Quiet on the Western Front",
            price: 20.00,

        },
        {
            img_url: "/classic/81T34Sem-tL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Wuthering Heights",
            price: 10.90,

        },
        {
            img_url: "/classic/81t73Rsp6wL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Jane Eyre",
            price: 13.90,

        },
        {
            img_url: "/classic/81WUAoL-wFL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Lord of the Flies",
            price: 5.90,

        },
        {
            img_url: "/classic/81zFedw-09L._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Frankenstein",
            price: 10.00,

        },
        {
            img_url: "/classic/91+KXvykHfL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Deverending Story",
            price: 10.90,

        },
        {
            img_url: "/classic/717PUnv72IL._AC_UL640_QL65_T2F_.jpg",
            book_name: "Son of Anger",
            price: 13.20,

        },
        {
            img_url: "/classic/A1Shg7iaMoL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Little Women",
            price: 5.90,

        }
    ],
    detective: [{
            img_url: "/detective/51wYtA4n0IL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Return to the same city",
            price: 10.65,

        },
        {
            img_url: "/detective/61v2UjII5QL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Sherlock Holmes",
            price: 14.70,

        },
        {
            img_url: "/detective/61yF7LDv9qL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Melton's Mettle",
            price: 4.60,

        },
        {
            img_url: "/detective/71D355JZ1SL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Death and the Security Guard",
            price: 14.30,

        },
        {
            img_url: "/detective/71fQAo503LL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The Orphanage by the Lake",
            price: 13.70,

        },
        {
            img_url: "/detective/71p4d02gMxL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Holmes Marple Poe",
            price: 8.50,

        },
        {
            img_url: "/detective/81BIM-N+-bL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The dead of Midwinter",
            price: 8.70,

        },
        {
            img_url: "/detective/81CMkbuY++L._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Her Dying Secret",
            price: 10.70,

        },
        {
            img_url: "/detective/81cZkYj+-IL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The wrong side of Goodbye",
            price: 9.70,

        },
        {
            img_url: "/detective/81-NKE5b8KL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Cold Quarry",
            price: 13.90,

        },
        {
            img_url: "/detective/81oaqy1Sv2L._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Face her Fear",
            price: 3.90,

        },
        {
            img_url: "/detective/81-QbrmIybL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "A Man's Partner and the Hated",
            price: 6.30,

        },
        {
            img_url: "/detective/81qY6uUU-sL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "New Orleans Mourning",
            price: 8.90,

        },
        {
            img_url: "/detective/81SL+WBFkqL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "End Game",
            price: 12.90,

        },
        {
            img_url: "/detective/81Y75+YoQKL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Close to Home",
            price: 10.90,

        },
        {
            img_url: "/detective/91AY3dy3VuL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The Poison",
            price: 7.00,

        },
        {
            img_url: "/detective/91l677LcLAL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The Body Reader",
            price: 10.90,

        },
        {
            img_url: "/detective/91ZcWZDG2IL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Murder in the Hollows",
            price: 13.90,

        },
        {
            img_url: "/detective/813+6qFA5pL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Dark State",
            price: 15.90,

        },
        {
            img_url: "/detective/814RsaMtNuL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Small Mercies",
            price: 7.00,

        },
        {
            img_url: "/detective/7198Z7YiOPL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Murdle",
            price: 11.90,

        }
    ],
    philosophy: [{
            img_url: "/philosophy/51jkCRL82TL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Entanglements",
            price: 10.65,

        },
        {
            img_url: "/philosophy/61e4sD41Z4L._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Beyond Good and Evil",
            price: 14.70,

        },
        {
            img_url: "/philosophy/61EVmWoiuaL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Seneca",
            price: 13.60,

        },
        {
            img_url: "/philosophy/71mHqwpxafL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "What we owe the future",
            price: 13.70,

        },
        {
            img_url: "/philosophy/71xH0ALI4-L._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Long and Happy Life",
            price: 8.50,

        },
        {
            img_url: "/philosophy/71zemgMXzHL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The Human Calling",
            price: 8.70,

        },
        {
            img_url: "/philosophy/71ZWRJk1bsL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Epictetus",
            price: 10.70,

        },
        {
            img_url: "/philosophy/81DFDGzHZqL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Meditations",
            price: 9.70,

        },
        {
            img_url: "/philosophy/81dor1Kws5L._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Beyond Good and Evil",
            price: 13.90,

        },
        {
            img_url: "/philosophy/81T-PQ9HFTL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Face her Fear",
            price: 3.90,

        },
        {
            img_url: "/philosophy/81YVKqTWdBL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Philosophy 100",
            price: 6.30,

        },
        {
            img_url: "/philosophy/91AiNeHUoNL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Philosophy",
            price: 8.90,

        },
        {
            img_url: "/philosophy/91nYfNvYa7L._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The Republic",
            price: 12.90,

        },
        {
            img_url: "/philosophy/91P9jFhGdZL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Ancient Greek",
            price: 10.90,

        },
        {
            img_url: "/philosophy/710A69AdMdL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Astonish Yourself",
            price: 7.00,

        },
        {
            img_url: "/philosophy/715WT6IGgLL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The Dily Stoic",
            price: 10.90,

        },
        {
            img_url: "/philosophy/718WK94K27L._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The Secret Science",
            price: 13.90,

        }
    ],
    poem: [{
            img_url: "/poems/41QmjZww3oL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Things we don't talk about",
            price: 3.90,

        },
        {
            img_url: "/poems/51+6hIyjvIL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The tears that taughts me",
            price: 13.00,

        },
        {
            img_url: "/poems/51+h7U-V3+L._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The frog in the pot",
            price: 6.30,

        },
        {
            img_url: "/poems/51F3CW1kBpL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Learning to love myself",
            price: 3.45,

        },
        {
            img_url: "/poems/51T6sfHuP2L._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Healing for no one but me",
            price: 10.90,

        },
        {
            img_url: "/poems/51VHrJi3LHL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Healing is a gift",
            price: 13.90,

        },
        {
            img_url: "/poems/51VmITQ1mYL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "This made me think of you",
            price: 4.90,

        },
        {
            img_url: "/poems/61BTYeua9uL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The default setting is love",
            price: 13.00,

        },
        {
            img_url: "/poems/61DmP+SzoyL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Lover girl",
            price: 13.90,

        },
        {
            img_url: "/poems/61KqVqpgnsL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "A collection of abandoned poetry",
            price: 20.90,

        },
        {
            img_url: "/poems/71Eq55V2AvL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Milk and Honey",
            price: 13.45,

        },
        {
            img_url: "/poems/71RD+pEvvlL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Self Love Poetry",
            price: 13.90,

        },
        {
            img_url: "/poems/81smI1Ow8PL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Serenity",
            price: 5.90,

        },
        {
            img_url: "/poems/617mlFsX8JL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "God Always Did",
            price: 13.50,

        },
        {
            img_url: "/poems/619p-aA7J9L._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The sun and her Flowers",
            price: 23.90,

        }
    ],
    psychology: [{
            img_url: "/psychology/61kSZ1q-T8L._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The Power of Your Mind",
            price: 16.90,

        },

        {
            img_url: "/psychology/61M--z09R5L._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Dream Change Life",
            price: 23.90,

        },

        {
            img_url: "/psychology/61UqNIAqXyL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Be Mentally Strong",
            price: 9.00,

        },
        {
            img_url: "/psychology/61vBIA0aouL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Mind what you think",
            price: 23.40,

        },

        {
            img_url: "/psychology/61wpy5OL4pL._AC_UL640_FMwebp_QL65_ (1).webp",
            book_name: "Human Bheavior",
            price: 23.90,

        },

        {
            img_url: "/psychology/71bVExi4yXL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Body keeps the score",
            price: 12.50,

        },
        {
            img_url: "/psychology/71ChZqqnerL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Inside the criminal mind",
            price: 20.90,

        },

        {
            img_url: "/psychology/71FjTgAVgyL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The whole brain child",
            price: 18.90,

        },

        {
            img_url: "/psychology/71HFjL1VMWL._AC_UL640_FMwebp_QL65_ (1).webp",
            book_name: "How to read people like a book",
            price: 12.65,

        },
        {
            img_url: "/psychology/513m+YXKr5L._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Accept how you feel",
            price: 13.90,

        }
    ],
    romance: [{
            img_url: "/romance/61tdwW3Nm8L._AC_UL640_FMwebp_QL65_.webp",
            book_name: "If he had been with me",
            price: 10.90,

        },
        {
            img_url: "/romance/71aXWhr9tTL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Twisted Love",
            price: 16.90,

        },
        {
            img_url: "/romance/71gvGw2rq7L._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Enemies with Benefits",
            price: 11.20,

        },
        {
            img_url: "/romance/71rhDPOP2mL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The Unexpected Card",
            price: 16.90,

        },
        {
            img_url: "/romance/81cMua2TpUL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "King of Wrath",
            price: 6.90,

        },
        {
            img_url: "/romance/81JgLmLru3L._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Work with me",
            price: 7.00,

        },
        {
            img_url: "/romance/81KD0kKB3BL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Unraveled",
            price: 20.90,

        },
        {
            img_url: "/romance/81uMF1t16LL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "If only i had told her",
            price: 16.35,

        },
        {
            img_url: "/romance/91pR5tWHSPL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Last Chance",
            price: 16.90,

        }
    ],
    science: [{
            img_url: "/science/41kXb6qWKbL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Mars Mission",
            price: 10.90,

        },
        {
            img_url: "/science/61GU2tkVCFL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The Girl who rode the Unihorn",
            price: 16.50,

        },

        {
            img_url: "/science/71+MwkwvbtL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The Cambirils",
            price: 20.45,

        },

        {
            img_url: "/science/71IMFdIdNPL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The Object",
            price: 10.90,

        },
        {
            img_url: "/science/71p+5+5lGWL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The Mars Anomaly",
            price: 6.70,

        },
        {
            img_url: "/science/71UR8nhbYML._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Frankenstein",
            price: 10.90,

        },

        {
            img_url: "/science/81FzbZ4M+HL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Time Gate",
            price: 13.90,

        },

        {
            img_url: "/science/81GEDDBFxRL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The Defense of the Commonwealth",
            price: 25.00,

        },
        {
            img_url: "/science/81y7nJRDQzL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Uss Hmailton",
            price: 10.90,

        },
        {
            img_url: "/science/91blFDsRgqL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The ARK",
            price: 15.50,

        },

        {
            img_url: "/science/91ON4YVnjlL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The Mountain in the sea",
            price: 10.90,

        },

        {
            img_url: "/science/613L55tJeuL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Ethos of Cain",
            price: 19.90,

        }
    ],
    thriller: [{
            img_url: "/thriller/51pbaLPxBPL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Undying",
            price: 10.90,

        },
        {
            img_url: "/thriller/61H49mkKH-L._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Just Once",
            price: 17.90,

        },
        {
            img_url: "/thriller/61IaDFo-AlL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Dont let her stay",
            price: 6.65,

        },
        {
            img_url: "/thriller/61ufZiWTI+L._AC_UL640_FMwebp_QL65_.webp",
            book_name: "I am watching you",
            price: 12.30,

        },
        {
            img_url: "/thriller/71GXttBHWEL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Foreign deceit",
            price: 15.00,

        },
        {
            img_url: "/thriller/71Wpy9SB1oL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Ward",
            price: 10.90,

        },
        {
            img_url: "/thriller/81BIM-N+-bL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The dead of midwinter",
            price: 8.90,

        },
        {
            img_url: "/thriller/81eHQ+r3hVL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "One last player",
            price: 7.90,

        },
        {
            img_url: "/thriller/81FGbR7AYqL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "A flicker in the dark",
            price: 10.90,

        },
        {
            img_url: "/thriller/81Ip8D6YtkL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Greatest enemy",
            price: 20.90,

        },
        {
            img_url: "/thriller/81JfFNg-UfL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Coworker",
            price: 10.65,

        },
        {
            img_url: "/thriller/81rLCGzX61L._AC_UL640_FMwebp_QL65_.webp",
            book_name: "In The Dark",
            price: 5.90,

        },
        {
            img_url: "/thriller/91BbLCJOruL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The Silent Patient",
            price: 10.90,

        },
        {
            img_url: "/thriller/91WnHGTBg7L._AC_UL640_FMwebp_QL65_.webp",
            book_name: "The Perfect Family",
            price: 15.90,

        },
        {
            img_url: "/thriller/813+6qFA5pL._AC_UL640_FMwebp_QL65_.webp",
            book_name: "Dark State",
            price: 10.90,

        }
    ],
    cart: [],
    list: []
}

export const reducer = (state = initial_state, action) => {


    switch (action.type) {
        case ADD_ADVENTURE_TO_CART:
            return {
                ...state,
                cart: [...state.cart, state.adventures[action.payload]]
            }
        case ADD_CLASSIC_TO_CART:
            return {
                ...state,
                cart: [...state.cart, state.classic[action.payload]]
            }
        case ADD_DETECTIVE_TO_CART:
            return {
                ...state,
                cart: [...state.cart, state.detective[action.payload]]
            }
        case ADD_PHILOSOPHY_TO_CART:
            return {
                ...state,
                cart: [...state.cart, state.philosophy[action.payload]]
            }
        case ADD_POEM_TO_CART:
            return {
                ...state,
                cart: [...state.cart, state.poem[action.payload]]
            }
        case ADD_PSYCHOLOGY_TO_CART:
            return {
                ...state,
                cart: [...state.cart, state.psychology[action.payload]]
            }
        case ADD_ROMANCE_TO_CART:
            return {
                ...state,
                cart: [...state.cart, state.romance[action.payload]]
            }
        case ADD_SCIENCE_TO_CART:
            return {
                ...state,
                cart: [...state.cart, state.science[action.payload]]
            }
        case ADD_THRILLER_TO_CART:
            return {
                ...state,
                cart: [...state.cart, state.thriller[action.payload]]
            }
        case ADD_BOOKS_TO_CART:
            return {
                ...state,
                cart: [...state.cart, state.books[action.payload]]
            }
        case ADD_ADVENTURE_TO_LIST:
            return {
                ...state,
                list: [...state.list, state.adventures[action.payload]]
            }
        case ADD_CLASSIC_TO_LIST:
            return {
                ...state,
                list: [...state.list, state.classic[action.payload]]
            }
        case ADD_DETECTIVE_TO_LIST:
            return {
                ...state,
                list: [...state.list, state.detective[action.payload]]
            }
        case ADD_PHILOSOPHY_TO_LIST:
            return {
                ...state,
                list: [...state.list, state.philosophy[action.payload]]
            }
        case ADD_POEM_TO_LIST:
            return {
                ...state,
                list: [...state.list, state.poem[action.payload]]
            }
        case ADD_PSYCHOLOGY_TO_LIST:
            return {
                ...state,
                list: [...state.list, state.psychology[action.payload]]
            }
        case ADD_ROMANCE_TO_LIST:
            return {
                ...state,
                list: [...state.list, state.romance[action.payload]]
            }
        case ADD_SCIENCE_TO_LIST:
            return {
                ...state,
                list: [...state.list, state.science[action.payload]]
            }
        case ADD_THRILLER_TO_LIST:
            return {
                ...state,
                list: [...state.list, state.thriller[action.payload]]
            }
        case ADD_BOOKS_TO_LIST:
            return {
                ...state,
                list: [...state.list, state.books[action.payload]]
            }
        case RESET_CART:
            return {
                ...state,
                cart: []
            };

        case RESET_LIST:
            return {
                ...state,
                list: []
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((index) => index.book_name !== action.payload)
            }
        case REMOVE_FROM_LIST:
            return {
                ...state,
                list: state.list.filter((index) => index.book_name !== action.payload)
            }
        default:
            return state;
    }

}