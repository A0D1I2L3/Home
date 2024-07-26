document.getElementById("sendMail").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Create content
  const bodyContent = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;

  // Check if the user is on a mobile device
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // For mobile devices, use mailto
    const mailtoUrl = `mailto:yoboihumantoo@gmail.com
?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      bodyContent
    )}`;
    window.location.href = mailtoUrl;
  } else {
    // For desktops, use Gmail popup
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=yoboihumantoo@gmail.com
&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;
    window.open(gmailUrl, "_blank", "width=800,height=600");
  }
});
