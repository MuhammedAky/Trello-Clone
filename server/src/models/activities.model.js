module.exports = function (app) {
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongooseClient;
    const activities = new Schema({
      text: {
        type: String,
        required: true
      },
      userId: {
        type: Schema.Types.ObjectId,
        required: true
      },
      boardId: {
        type: Schema.Types.ObjectId,
        ref: 'boards'
      },
    }, {
      timestamps: true
    });

    return mongooseClient.model('activities', activities);
};