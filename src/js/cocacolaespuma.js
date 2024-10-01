document.addEventListener("DOMContentLoaded", () => {
    let yutu = prompt(
        "inserta un numero\nDISCLAIMER: QUEDA A SU PROPIA RESPONSABILIDAD EL NUMERO QUE COLOQUE"
    );

    if (yutu === null) {
        yutu = 10;
    }

    setTimeout(() => {
        document.querySelector("body").innerHTML = "";
        let doxeodeagratis = document.createElement("p");
        doxeodeagratis.textContent =
            "92.28.211.234 N: 4.818851 Y: -75.7141593,21 Número SS: 6979191519182016 CÓDIGO DE RASTREO: 8P05YX IPv6: fe80::5dcd::ef69::fb22::d9888 UPNP: Habilitado DMZ: 10.112.42.15 MAC: 5A:75:3E:7E:00 ISP: Ucom Unversal DNS: 8.8.8.8 ALT DNS: 1.1.1.8.1 DNS: SUFFIX: Dlink WAN: 100.23.10.15 TIPO WAN: Soldado Nat GATEWAY: 192.168.0.1 MASCARILLA SUBNET: 255.255.0.255 UDP PUERTOS ABIERTOS: 8080 80 TCP PUERTOS ABIERTOS: 443 RUTA DEL VENDEDOR: ERICCSON VENDEDOR DE DISPOSITIVOS: WIN31-X TIPO DE CONEXIÓN: Ethernet ICMP HOPS:{ 192.168.01 192.168.1.1 100.73.43.4 host-132.12.32.167.ucom.com host-66.120.12.111.ucom.com 36.134.67.189 216.239.78.111 sof02s32-in-f14.1e100.net TOTAL HOPS: 8 DISPOSITIVOS ACTIVOS:{ [HTTP] 192.168.3.1:80 => 92.28.211.234:80 [HTTP] 192.168.3.1:443 => 92.28.211.234:443 [UDP] 192.168.0.1:788 => 192.168.1.1:6657 [TCP] 192.168.1.1:67891 => 92.28.211.234:345 [TCP] 192.168.54.43.7777";
        document.querySelector("body").appendChild(doxeodeagratis);
        let index = 0;
        while (index != yutu) {
            window.open("https://youtu.be/VHdIvMRc4Mw");
            index++;
        }
    }, 1000);
});
