var mongoose = require('mongoose');

// Define the schema for a bookmark
var schema = new mongoose.Schema({
    /**
     * url - A String containing the URL of the bookmarked item.
     */
    url: {
        type: String,
        required: 'A URL is required.'
    },
    /**
     * title - A String representing a brief, human-readable title for the
     *         bookmark.
     */
    title: String,
    /**
     * description - A String providing a more complete description of the
     *               bookmarked item (optional).
     */
    description: String,
    /**
     * created - The Date and time that the bookmark was created.
     */
    created: Date
});

// Export the model
var Bookmark = mongoose.model('bookmark', schema);
module.exports = Bookmark;