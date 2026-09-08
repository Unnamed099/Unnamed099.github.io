# server.py
import http.server
import socketserver

PORT = 8080
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("127.0.0.1", PORT), Handler) as httpd:
    print(f"服务器运行在 http://127.0.0.1:{PORT}")
    print("按 Ctrl+C 停止服务器")
    httpd.serve_forever()