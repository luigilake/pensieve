import swal from 'sweetalert';

var hello = () => {
  swal({
    title: "Welcome to The Pensieve Project!",
    text: "This app is based on the Pensieve, a memory collecting device from the Harry Potter series, and aims to combat historical revisionism by providing you and all other users with a rich tapestry of intimate, first-person moments. Share your experiences, thoughts, and emotions about specific events! Everyone's here to share and be heard.",
    buttons: false,
  });
}

export default hello
