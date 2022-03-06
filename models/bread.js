const {default: mongoose, Schema} = require("mongoose");

const breadSchema = new Schema({
    name: {type: String, required: true},
    image: {type: String, default: 'https://knowledgestew.com/wp-content/uploads/2021/05/bread.jpg'},
    hasGluten: {type: Boolean, default: false},
    baker: {
        type: mongoose.Types.ObjectId,
        ref: 'Baker'
    }
})

breadSchema.methods.getBakedBy = function(){
    return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`
}

module.exports = mongoose.model('Bread', breadSchema);
