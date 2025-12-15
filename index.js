function renderAd(winningBid) {
  const adUnitElement = document.getElementById(winningBid.adUnitCode);
  if (adUnitElement) {
    const iframe = document.createElement("iframe");
    iframe.frameBorder = "0";
    iframe.scrolling = "no";
    iframe.classList.add('ad-iframe');
    adUnitElement.appendChild(iframe);
    const iframeDoc = iframe.contentWindow.document;
    pbjs.renderAd(iframeDoc, winningBid.adId);
  }
}

function renderAllAdUnits() {
  var winners = pbjs.getHighestCpmBids();
  for (var i = 0; i < winners.length; i++) {
    renderAd(winners[i]);
  }
}

const adUnits = [
  {
    code: "ad-1",
    mediaTypes: {
      banner: {
        sizes: [[800, 600], [500, 500], [300, 250]],
      },
    },
    bids: [
      {
        bidder: "yaleo",
        params: {
          placementId: '95a09f24-afb8-441c-977b-08b4039cb88e',
        },
      },
    ],
  },
];

window.pbjs = window.pbjs || {};
window.pbjs.que = window.pbjs.que ?? [];
window.pbjs.que.push(() => {
  window.pbjs.setConfig({
    appnexusAuctionKeywords: {
      genre: ['classical', 'jazz'],
      instrument: 'piano'
    },
    consentManagement: {
      gdpr: {
        cmpApi: "static",
        timeout: 8000,
        consentData: {
          gdprApplies: false,
          tcString: "CQWb-DgQWb-DgAcABBDEB4FsAP_gAAAAAAQ4LbJB_CrdbXFK-Dx36PogeYgf99gBKsQBAAaBA2AFSAuQ4IAC00EyFAyABAACAAAAg3RBIAJEEABEAUCAAIgEAQBEAAQQgBAKBABAgAEQQgBIAAgCCIAAUQAIgACNElUAmQiAKYKECEBgwIggKAYAgIABQACAAIMACEg4ABAAAIIAIKhEE4JAEAKAAAEAARgJIAABAAQAQAhAQAAAoAAAAHBMBSIgEAABAAAAAAAIAAAAAAwgAEQGD_BauAQADgAz4BrwGQgO2AkiBQQC1YBgSBqAAsACoAHAAPAAggBkAGgAPAAmABVADeAH4AQkAhgCJAEcAJoAYAAwwBlADnAHeAPaAfYB-gEUgI0AjkBIgEmALmAXoAxQBtADcAHEASIAmkBQ4CkQFNgLYAXIAvMBhoDJwGrgNzAcmA8cCEIELgJFASYAmqBQgCioFMggAkABwARwCUgLmAX-AyEBwgEDAJ6DoHgACwAKgAcABAAC6AGQAaAA8ACYAFMAKsAXABdADeAH6AQwBEgCOAE0AKMAYAAwwBlADRAHOAO8Ae0A-wD9gIoAiwBHICRAJMAXOAvIC9AGKANoAbgA4gCEAEXgJEATIAmkBQ4CmwFWALYAXIAvMBfQDDQGTgMsAaaA1UBq4DkwHjgPrAkUBLQCaoFCAKKjgC0ADgAPAAuACQAI4AUAByAEpAUiAuYBf4DIQG5gOEAgYBBsCN4EkQJ6AUyAtABbAC2pCAyAAsAFwAVQAuABvAD8AMAAc4A7wCKAEcAJSAXMAxQBtAE0gKbAVYAuQBk4DVQHjgSKAoqBV8gAHAAeAOQBngEGwI3gSRAnoSgOgALAA4ADwAJgAVQAuQCGAIkARwAowBgADvAH4ARwAuYBigDiAIQAReAkQBTYC2AFyALzAZOAywCEIEigJqgUVJACQALgAqACOAuYBf4DPAKZAWgAtqUgYgALAAqABwAEEAMgA0AB4AEwAKoAfoBDAESAI4AUYAwABlADRAHOAO-AfYB-gEWAI5ASIBJQC5gF5AMUAbQA3ABxAEXgJEATSAocBTYCrAFsALkAXmAvoBhoDJwGWAOTAeKA8cCEIEOQJFASYAmqBRUoAVAAuACQAFwARwAoADkAJSAa8A7YCEAFZALmAZCAzwBuYEDAINgSRAoIBaAC2paAOAMAAjgBegFDgKbAVYA8csABAZCA.f_wAAAAAAAAA",
        },
      },
    },
    storageAllowed: true,
    bidderTimeout: 10000,
  });

  window.pbjs.bidderSettings = {
    standard: {
      allowZeroCpmBids: true,
      storageAllowed: true,
    }
  };
});
window.pbjs.que.push(() => {
  window.pbjs.requestBids({
    adUnits: adUnits,
    bidsBackHandler: renderAllAdUnits,
  });
});

window.pbjs.processQueue();
