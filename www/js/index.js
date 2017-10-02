const app = {
    acceptsAllCerts: false,

    // Application Constructor
    initialize: function() {
        document.getElementById('toggleAllCertsBtn').addEventListener('click', this.onToggleAllCertsBtnClick.bind(this));
        document.getElementById('getBtn').addEventListener('click', this.onGetBtnClick.bind(this));
        document.getElementById('patchBtn').addEventListener('click', this.onPatchBtnClick.bind(this));
        // document.getElementById('urlInput').value = 'http://172.16.29.50:8085/test';
    },

    print: function(content) {
      document.getElementById('resultTextarea').value += '\n' + JSON.stringify(content);
    },

    onGetBtnClick: function() {
      const url = document.getElementById('urlInput').value;

      cordova.plugin.http.get(url, {}, {}, data => this.print(data), error => this.print(error));
    },

    onPatchBtnClick: function() {
      const url = document.getElementById('urlInput').value;

      cordova.plugin.http.patch(url, { test: 'testString' }, {}, data => this.print(data), error => this.print(error));
    },

    onToggleAllCertsBtnClick: function() {
      const accept = this.acceptsAllCerts = !this.acceptsAllCerts;

      cordova.plugin.http.acceptAllCerts(accept, () => this.print(`${accept ? '' : 'not '}accepting all certs`));
      cordova.plugin.http.validateDomainName(!accept, () => this.print(`${accept ? 'not ' : ''}validating domain name`));
    }
};

app.initialize();
