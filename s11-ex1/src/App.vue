<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Form</h1>
                    <hr>
                    <form>

                      <div class="form-inline">
                        <div class="form-group">
                          <label for="firstname">First Name</label>
                          <input type="text" class="form-control" placeholder="First Name" v-model="userData.firstName">
                        </div>
                        <div class="form-group">
                          <label for="lastname" >Last Name</label>
                          <input type="text" class="form-control" placeholder="Last Name" v-model="userData.lastName">
                        </div>
                      </div>

                      <hr>
                      <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" placeholder="Email" v-model="userData.email">
                      </div>

                      <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" placeholder="Password" v-model="userData.password">
                      </div>

                      <h4>Store Data?</h4>
                      <div class="form-inline">
                        <label class="radio-inline">
                          <input type="radio" name="inlineRadioOptions" value="Yes" v-model="userData.storeData"> Yes
                        </label>
                        <label class="radio-inline">
                          <input type="radio" name="inlineRadioOptions" value="No" v-model="userData.storeData"> No
                        </label>
                      </div>

                      <hr>

                      <button type="submit" class="btn btn-default" @click.prevent="submitForm">Submit</button>
                    </form>
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p><strong>Full Name:</strong> <span v-if="formSubmitted">{{userData.firstName + ' ' + userData.lastName}}</span> </p>
                        <p><strong>Mail:</strong> <span v-if="formSubmitted">{{userData.email}}</span> </p>
                        <p><strong>Password:</strong> <span v-if="formSubmitted">{{userData.password}} </span></p>
                        <p><strong>Store in Database:</strong> <span v-if="formSubmitted">{{userData.storeData}}</span> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          formSubmitted: false,
          userData: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            storeData: 'Yes'
          }
        }
      },
      methods: {
        submitForm() {
          this.formSubmitted = true
        }
      }
    }
</script>

<style>
</style>
