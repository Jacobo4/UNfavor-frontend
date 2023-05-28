// self.addEventListener ('activate', function (event) {
//   console.log ('service worker activated');
// });

const broadcast = new BroadcastChannel('matches-channel');
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

    broadcast.postMessage(payload.title);
});

self.onmessage = function(event) {
  console.log("Got message in SW", event.data.text);

  if (event.source) {
    console.log("event.source present");
    event.source.postMessage("Woop!");
  }
  else if (self.clients) {
    console.log("Attempting postMessage via clients API");
    clients.matchAll().then(function(clients) {
      for (var client of clients) {
        client.postMessage("Whoop! (via client api)");
      }
    });
  }
  else if (event.data.port) {
    event.data.port.postMessage("Woop!");
  }
  else {
    console.log('No useful return channel');
  }
};
