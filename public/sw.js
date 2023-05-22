// self.addEventListener ('activate', function (event) {
//   console.log ('service worker activated');
// });


self.addEventListener('push', async function (event) {
    const payload = event.data.json(); // Extract the push notification payload

    // Customize the notification options according to your needs
    const options = {
        body: payload.body,
        // icon: '/path/to/icon.png',
        // Add more options as desired
    };

    event.waitUntil(
        self.registration.showNotification(payload.title, options)
    );
});