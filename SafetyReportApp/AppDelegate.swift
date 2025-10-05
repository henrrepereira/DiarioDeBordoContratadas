import UIKit

@main
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        
        // Configurar a janela principal
        window = UIWindow(frame: UIScreen.main.bounds)
        window?.rootViewController = ViewController()
        window?.makeKeyAndVisible()
        
        return true
    }

    func applicationWillResignActive(_ application: UIApplication) {
        // Pausar tarefas quando o app vai para background
    }

    func applicationDidEnterBackground(_ application: UIApplication) {
        // Salvar dados quando o app entra em background
    }

    func applicationWillEnterForeground(_ application: UIApplication) {
        // Preparar para voltar ao foreground
    }

    func applicationDidBecomeActive(_ application: UIApplication) {
        // Retomar tarefas quando o app se torna ativo
    }

    func applicationWillTerminate(_ application: UIApplication) {
        // Salvar dados antes de terminar
    }
}
