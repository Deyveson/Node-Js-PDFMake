const http = require('http');

const pdfMake = require('./pdfmake/pdfmake.js');
const vfsFonts = require('./pdfmake/vfs_fonts');

const hostname = '127.0.0.1';
const port = 3000;

pdfMake.vfs = vfsFonts.pdfMake.vfs;

const server = http.createServer((req, res) => {

    const docDefinition = {
        content: [
            {
                text: 'Emissão: 2019-06-04 19:45:12.660351',
                style: 'data',
                alignment: 'right'
            },
            {
                image: 'data:image/jpeg;base64,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',
                width: 50,
                height: 50
            },
            {
                text: 'Pedido: 1954834',
                style: 'header',
                alignment: 'center'
            },
            {
                text: 'Nome do cliente: DERMINA INACIA DE OLIVEIRA',
                style: 'name',
                alignment: 'center'
            },
            {canvas: [{type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1}]},
            {
                style: 'info',
                text: 'DISTRIBUIDORA S.A - 26+958.632/0008-98',
            },
            {
                fontSize: 10,
                text: 'AV.SILVES, CRESPO, 1000',
            },
            {
                fontSize: 10,
                text: 'Fone: 092-0000000',
            },
            {
                fontSize: 10,
                text: 'OBS: PED PEQUENO ENTREGAR NA GARAGEM 2',
            },

            {
                style: 'tableExample',
                table: {
                    body: [
                        [{text: 'FORN', style: 'tableHeader'},
                            {text: 'PRODUTO', style: 'tableHeader'},
                            {text: 'QTDE', style: 'tableHeader'},
                            {text: 'LIQUIDO', style: 'tableHeader'},
                            {text: 'TOTAL', style: 'tableHeader'},
                            {text: 'DESCRICAO', style: 'tableHeader'}],
                        ['144', '16001', '2', '412.6', '825.2', 'AMORTECEDOR TRASEIRO COFAP']
                    ]
                },
                layout: 'lightHorizontalLines'
            },
            {
                fontSize: 20,
                text: 'TOTAL: 825.2',
                alignment: 'center',
                bold: true
            },

        ],
        styles: {
            header: {
                fontSize: 20,
                bold: true,
            },
            tableExample: {
                margin: [0, 10, 0, 10],
            },
            tableHeader: {
                bold: true,
            },
            data: {
                fontSize: 10,
            },
            info: {
                margin: [0, 5, 0, 0],
                fontSize: 10,
            },
            name: {
                margin: [0, 0, 0, 5],
            }
        }

    };

    const pdfDoc = pdfMake.createPdf(docDefinition);
    pdfDoc.getBase64((data)=>{
        res.writeHead(200,
            {
                'Content-Type': 'application/pdf',
                'Content-Disposition':'attachment;filename="pedido.pdf"'
            });

        const download = Buffer.from(data.toString('utf-8'), 'base64');
        res.end(download);
    });

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});