import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Courses{
        id: ID
        courseName: String
        category: String
        price: Int
        language: String
        email: String
        stack: CourseStack
        teachingAssists: [TeachingAssist]
    }
    type TeachingAssist{
        firstName: String
        LastName: String
        experience: Int
    }

    enum CourseStack{
        Web
        Mobile
        Other
    }

    type  Query{
        getCourses(id: ID): Courses
    }

    input CourseInput{
        id: ID
        courseName: String!
        category: String
        price: Int!
        language: String
        email: String
        stack: CourseStack
        teachingAssists: [TeachingAssistInput]!
    }

    input TeachingAssistInput{
        firstName: String
        LastName: String
        experience: Int
    }

    type Mutation{
        createCourse(input: CourseInput): Courses
    }
`);

export default schema;