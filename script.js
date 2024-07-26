document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Create mailto link
    const mailtoLink = `mailto:yoboihumantoo@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
    )}`;

    // Open email client
    window.location.href = mailtoLink;
  });
