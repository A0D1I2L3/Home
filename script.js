document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if (this.checkValidity()) {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      const bodyContent = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;

      const isMobile = /Mobi|Android/i.test(navigator.userAgent);

      if (isMobile) {
        const mailtoUrl = `mailto:yoboihumantoo@gmail.com?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(bodyContent)}`;
        window.location.href = mailtoUrl;
      } else {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=yoboihumantoo@gmail.com&su=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(bodyContent)}`;
        window.open(gmailUrl, "_blank", "width=800,height=600");
      }
    } else {
      this.reportValidity();
    }
  });
