document.getElementById("sendMail").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !phone || !subject || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  const bodyContent = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;

  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  if (isMobile) {
    const mailtoUrl = `mailto:yoboihumantoo@gmail.com
  ?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      bodyContent
    )}`;
    window.location.href = mailtoUrl;
  } else {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=yoboihumantoo@gmail.com
  &su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;
    window.open(gmailUrl, "_blank", "width=800,height=600");
  }
});
