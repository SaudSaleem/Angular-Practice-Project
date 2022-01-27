//services has no decorator function, it should be a plan class
//service used to communcate with HTTP server for diffrent requests
export class CoursesService {
    //suppose these courses get from HTTP request
    getCourses()
    {
        return ["ServiceCourse1","ServiceCourse2","ServiceCourse3"]
    }
}