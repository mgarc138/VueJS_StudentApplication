<template>
  <div id="add-applicant">
    <h2>Add a new Applicant</h2>
    <form>
      <label>Name:</label>
      <input type="text" v-model="applicant.name" required/>
      <label>Address:</label>
      <input type="text" v-model="applicant.address" required/>
      <label>Email:</label>
      <input type="text" v-model="applicant.email" required/>
      <label>PhoneNumber:</label>
      <input type="text" v-model="applicant.phoneNumber" required/>
      <label>Bachelors Education School:</label>
      <input type="text" v-model="applicant.bsEducationSchool" required/>
      <label>Bachelors Education Title:</label>
      <input type="text" v-model="applicant.bsEducationTitle" required/>
      <label>Masters Education School:</label>
      <input type="text" v-model="applicant.msEducationSchool" required/>
      <label>Masters Education Title:</label>
      <input type="text" v-model="applicant.msEducationTitle" required/>
      <label>PhD Education School:</label>
      <input type="text" v-model="applicant.pHdEducationSchool" required/>
      <label>PhD Education Title:</label>
      <input type="text" v-model="applicant.pHdEducationTitle" required/>
      <label>Work Experience Company Name One:</label>
      <input type="text" v-model="applicant.workExperienceCompanyNameOne" required/>
      <label>Work Experience Title One:</label>
      <input type="text" v-model="applicant.workExperienceTitleOne" required/>
      <label>Work Experience Company Name Two:</label>
      <input type="text" v-model="applicant.workExperienceCompanyNameTwo" required/>
      <label>Work Experience Title Two:</label>
      <input type="text" v-model="applicant.workExperienceTitleTwo" required/>
      <label>Work Experience Company Name Three:</label>
      <input type="text" v-model="applicant.workExperienceCompanyNameThree" required/>
      <label>Work Experience Title Three:</label>
      <input type="text" v-model="applicant.workExperienceTitleThree" required/>
      <label>Extra Curricular Activity One:</label>
      <input type="text" v-model="applicant.extraCurricularActivitiesOne" required/>
      <label>Extra Curricular Activity Two:</label>
      <input type="text" v-model="applicant.extraCurricularActivitiesTwo" required/>

      <button class="button" style="vertical-align:middle" v-on:click.prevent="post"><span>Add Applicant</span></button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding applicant</h3>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      applicant: {
        name: "",
        address: "",
        email: "",
        phoneNumber: "",
        bsEducationSchool: "",
        bsEducationTitle: "",
        msEducationSchool: "",
        msEducationTitle: "",
        pHdEducationSchool: "",
        pHdEducationTitle: "",
        workExperienceCompanyNameOne: "",
        workExperienceTitleOne: "",
        workExperienceCompanyNameTwo: "",
        workExperienceTitleTwo: "",
        workExperienceCompanyNameThree: "",
        workExperienceTitleThree: "",
        extraCurricularActivitiesOne: "",
        extraCurricularActivitiesTwo: ""
      },
      submitted:false,
    }
  },
  methods:{
    post:function(){
      this.$http.post('http://localhost:5000/api/student',{
        name: this.applicant.name,
        address: this.applicant.address,
        email: this.applicant.email,
        phoneNumber: this.applicant.phoneNumber,
        bsEducationSchool: this.applicant.bsEducationSchool,
        bsEducationTitle: this.applicant.bsEducationTitle,
        msEducationSchool: this.applicant.msEducationSchool,
        msEducationTitle: this.applicant.msEducationTitle,
        pHdEducationSchool: this.applicant.pHdEducationSchool,
        pHdEducationTitle: this.applicant.pHdEducationTitle,
        workExperienceCompanyNameOne: this.applicant.workExperienceCompanyNameOne,
        workExperienceTitleOne: this.applicant.workExperienceTitleOne,
        workExperienceCompanyNameTwo: this.applicant.workExperienceCompanyNameTwo,
        workExperienceTitleTwo: this.applicant.workExperienceTitleTwo,
        workExperienceCompanyNameThree: this.applicant.workExperienceCompanyNameThree,
        workExperienceTitleThree: this.applicant.workExperienceTitleThree,
        extraCurricularActivitiesOne: this.applicant.extraCurricularActivitiesOne,
        extraCurricularActivitiesTwo: this.applicant.extraCurricularActivitiesTwo
      }).then(function(data){
        console.log(data);
        this.submitted = true;
      });
    }
  }
}
</script>

<style scoped>
#add-applicant *{
  box-sizing: border-box;
}
#add-blog{
  margin: 20px auto;
  max-width: 500px;
}
label{
  display: block;
  margin: 20px 0 10px
}
input[type="text"]{
  display: block;
  width: 100%;
  padding: 8px;
}
button{
  display: inline-block;
  border-radius: 4px;
  background-color: #196486;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 16px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 20px 0 10px
}
button span {
 cursor: pointer;
 display: inline-block;
 position: relative;
 transition: 0.5s;
}
button span:after {
 content: '\00bb';
 position: absolute;
 opacity: 0;
 top: 0;
 right: -20px;
 transition: 0.5s;
}

button:hover span {
 padding-right: 25px;
}

button:hover span:after {
 opacity: 1;
 right: 0;
}
</style>
