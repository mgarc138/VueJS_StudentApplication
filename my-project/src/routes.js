import ShowAllStudents from './components/ShowAllStudents.vue'
import CreateStudent from './components/CreateStudent.vue'
import UploadResume from './components/UploadResume.vue'

export default[
  {path: '/', component: ShowAllStudents},
  {path: '/form', component: CreateStudent},
  {path: '/upload', component: UploadResume}
]
