


class Course{
    constructor(id,{
        courseName, category, price, language, email, stack,teachingAssists
    }){
        this.id = id
        this.courseName = courseName
        this.category = category
        this.price = price
        this.email = email
        this.stack = stack
        this.language = language
        this.teachingAssists = teachingAssists
    }
}

const courseHolder = {}

const resolvers = {
    getCourse:({id})=>{
        return new Course(id,courseHolder[id])
    },
    createCourse:({ input })=>{
        let id = Date.now()
        courseHolder[id] = input
        return new Course(id, input)
    }
}


export default resolvers;