<template>
  <center>
    <form @submit="handleSubmit($event)">
      <input type="text" placeholder="First Name" id="fname" v-model="fname" />
      <input type="text" placeholder="Middle Name" v-model="mname" />
      <input type="text" placeholder="Last Name" v-model="lname" />

      <label for="dob">Date of Birth</label>
      <input
        type="date"
        id="dob"
        v-model="dob"
        :max="maxDate"
        @change="generateAge($event)"
      />

      <p v-if="age">Age: {{ age }}</p>

      <div class="dob">
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          v-model="gender"
        />
        <label for="male">Male</label>

        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          v-model="gender"
        />
        <label for="female">Female</label>
      </div>

      <p>Address</p>
      <textarea cols="30" rows="10" id="address" v-model="address"></textarea>

      <p>Education</p>
      <select v-model="education">
        <option value="ug">Under Graduation</option>
        <option value="g">Graduation</option>
        <option value="pg">Post Graduation</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  </center>
</template>

<script>
export default {
  data() {
    return {
      fname: "",
      mname: "",
      lname: "",
      dob: "",
      age: "",
      gender: "",
      address: "",
      education: "",
    };
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();
      const userData = {};

      if (this.fname && this.fname.trim().length > 0) {
        userData.firstName = this.fname;
      } else {
        return alert("First name cannot be empty");
      }

      if (this.mname && this.mname.trim().length > 0) {
        userData.middleName = this.mname;
      } else {
        return alert("Middle name cannot be empty");
      }

      if (this.lname && this.lname.trim().length > 0) {
        userData.lastName = this.lname;
      } else {
        return alert("Last name cannot be empty");
      }

      if (this.dob && this.dob.trim().length > 0) {
        userData.dob = this.dob;
      } else {
        return alert("Date of Birth cannot be empty");
      }

      const age = this.generateAge();

      if (age > 18) {
        userData.age = age;
      } else {
        alert("Invalid age, below 18");
      }

      if (this.gender && this.gender.trim().length > 0) {
        userData.gender = this.gender;
      } else {
        return alert("Gender cannot be empty");
      }

      console.log(userData);
    },
    generateAge() {
      const today = new Date();
      const diffTime = Math.abs(today - new Date(this.dob));
      const age = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365)) - 1;
      return age;
    },
  },
  computed: {
    maxDate() {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 60%;

  input {
    height: 20px;
    outline: none;
    font-size: 1.2em;
  }

  textarea,
  select {
    outline: none;
  }

  button {
    height: 50px;
    font-size: 1.7em;
  }

  .dob {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
}
</style>
