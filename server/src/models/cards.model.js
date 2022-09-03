module.exports = function (app) {
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongooseClient;
    const cards = new Schema({
      title: {
        type: String,
        required: true
      },
      description: {
        type: String
      },
      order: {
        type: Number,
        required: true,
        default: 0,
      },
      archived: {
        type: Boolean,
        required: true,
        default: false,
      },
      listId: {
        type: Schema.Types.ObjectId,
        ref: 'lists'
      },
      boardId: {
        type: Schema.Types.ObjectId,
        ref: 'boards'
      },
      members: [{
        type: Schema.Types.ObjectId,
        ref: 'users'
      }],
    }, {
      timestamps: true
    });

    return mongooseClient.model('cards', cards);
};