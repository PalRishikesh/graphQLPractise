const Recipe = require("../models/Recipe")

module.exports = {
    Query:{
        async recipe(_,{ID}){
            return await Recipe.findById(ID)
        },
        async getRecipes(_,{amount}){
            return await Recipe.find().sort({createdAt:-1}).limit(amount)
        }
    },
    Mutation:{
        async createRecipe(_,{recipeInput: {name, description}}){
            const createdRecipe = new Recipe({
                name: name,
                description: description,
                createdAt: new Date().toString(),
                thumbsUp:0,
                thumbsDown:0
            });

            const res = await createdRecipe.save();// Mongo DB Saving
            console.log(res._doc);
            return {
                id: res.id,
                ...res._doc
            }
        },
        async deleteRecipe(_,{ID}){
            const wasDeleted = (await Recipe.deleteOne({_id: ID})).deletedCount;
            //1 if deleted or else 0
            return wasDeleted;
        },
        async editRecipe(_,{ID, recipeInput:{name, description}}){
            const wasEdited = (await Recipe.updateOne({_id,ID},{name:name, description: description})).modifiedCount;
            return wasEdited;// 1 if edited or else 0
        }
    }
}