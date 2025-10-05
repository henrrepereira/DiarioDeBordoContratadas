import UIKit
import WebKit

class ViewController: UIViewController, WKNavigationDelegate {
    
    var webView: WKWebView!
    
    override func loadView() {
        webView = WKWebView()
        webView.navigationDelegate = self
        view = webView
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Carregar o arquivo HTML local
        if let htmlPath = Bundle.main.path(forResource: "safety-report-app-completo", ofType: "html") {
            let url = URL(fileURLWithPath: htmlPath)
            let request = URLRequest(url: url)
            webView.load(request)
        } else {
            // Fallback: carregar versão online se o arquivo local não existir
            if let url = URL(string: "https://seu-dominio.com/safety-report-app-completo.html") {
                let request = URLRequest(url: url)
                webView.load(request)
            }
        }
        
        // Configurar para permitir zoom e outras interações
        webView.configuration.preferences.javaScriptEnabled = true
        webView.configuration.allowsInlineMediaPlayback = true
        webView.configuration.mediaTypesRequiringUserActionForPlayback = []
    }
    
    // Permitir acesso à câmera e galeria
    func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        decisionHandler(.allow)
    }
    
    // Lidar com popups e novas janelas
    func webView(_ webView: WKWebView, createWebViewWith configuration: WKWebViewConfiguration, for navigationAction: WKNavigationAction, windowFeatures: WKWindowFeatures) -> WKWebView? {
        if navigationAction.targetFrame == nil {
            webView.load(navigationAction.request)
        }
        return nil
    }
}
