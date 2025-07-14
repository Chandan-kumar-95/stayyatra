const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    // image: {
    //     type: String,
    //     default: 
    //         "https://1.bp.blogspot.com/-p-iF6LKR3LE/XwIhnfcbsbI/AAAAAAAAA_8/6nejFCtu1ygbBXDpNEeUWNK-ScdBik2EACLcBGAsYHQ/s1600/ss_172eb0018599c284c88fac88ff7a07330c472ea0.1920x1080.jpg",
    //     set: (v) =>
    //         v == ""
    //     ? "https://1.bp.blogspot.com/-p-iF6LKR3LE/XwIhnfcbsbI/AAAAAAAAA_8/6nejFCtu1ygbBXDpNEeUWNK-ScdBik2EACLcBGAsYHQ/s1600/ss_172eb0018599c284c88fac88ff7a07330c472ea0.1920x1080.jpg"
    //     : v,
    // },


    //      image: {
    //     type: String,
    //     default:
    //       "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //     set: (v) =>
    //       v === ""
    //         ? "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    //         : v,
    //   },


    // image: {
    //     filename: { type: String, default: "https://unsplash.com/photos/sunrise-illuminates-the-ocean-waves-and-beach-PMhfO33osFE" },
    //     url: {
    //         type: String,
    //         // default: "https://unsplash.com/photos/sunrise-illuminates-the-ocean-waves-and-beach-PMhfO33osFE"
    //         set: (v) =>
    //             v == ""
    //                 ? "https://1.bp.blogspot.com/-p-iF6LKR3LE/XwIhnfcbsbI/AAAAAAAAA_8/6nejFCtu1ygbBXDpNEeUWNK-ScdBik2EACLcBGAsYHQ/s1600/ss_172eb0018599c284c88fac88ff7a07330c472ea0.1920x1080.jpg"
    //                 : v,
    //     }

    // },
    image: {
        url: String,
        filename: String
    },

    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },

    geometry: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
});


listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
});
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;