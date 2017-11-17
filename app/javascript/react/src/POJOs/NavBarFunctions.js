import swal from 'sweetalert';

export function hello(){
  swal({
    title: "Welcome to The Pensieve Project!",
    text: "This app is based on the Pensieve, a memory collecting device from the Harry Potter series, and aims to combat historical revisionism by providing you and all other users with a rich tapestry of intimate, first-person moments. Share your experiences, thoughts, and emotions about specific events! Everyone's here to share and be heard.",
    buttons: false,
  });
}

export function signOut(){
  swal("Are you sure you want to sign out?", {
    buttons: ["Cancel", "Sign Out"],
  }).
  then(value => {
    if(value){
      window.location.replace("/signout")
    }
  })
}

export function signIn(){
  swal({
    title: "Sign In",
    icon: "info",
    buttons: {
      google: {
        text: 'Sign In with Google',
        value: 'google'
      },
      github: {
        text: 'Sign In with Github',
        value: 'github'
      }
    }
  })
  .then(value => {
    if(value == 'github'){
      window.location.replace("/auth/github")
    } else if (value == 'google'){
      window.location.replace("/auth/google")
    }
  })
}

export default { hello, signOut, signIn }
