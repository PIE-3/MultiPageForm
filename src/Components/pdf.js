import { jsPDF } from "jspdf";


export const generatePDF = ({ firstName, lastName, nickName, address, city, state, zip, phone, email }) => {
    const doc = new jsPDF('p', 'mm', 'a4');
    var t = 10, l = 10
    doc.viewerPreferences({ FitWindow: true }, true);
    doc.setFontSize(18);
    doc.setTextColor(0, 0, 0);
    doc.setLineHeightFactor(1.3);
    doc.text('Review', l, t)
    t += 4
    doc.setDrawColor(192, 192, 192);
    doc.line(l, t, 200, t);
    t += 10
    // Names
    doc.setFontSize(10);
    doc.text('Names', l, t)
    t += 8
    doc.setFontSize(12);
    doc.text('First Name:', l, t)
    doc.text(firstName, l + 40, t)

    t += 6
    doc.text('Last Name:', l, t)
    doc.text(lastName, l + 40, t)
    t += 6
    doc.text('Nick Name:', l, t)
    doc.text(nickName, l + 40, t)
    t += 6
    doc.line(l, t, 200, t);
    t += 10

    // Address
    doc.setFontSize(10);
    doc.text('Address', l, t)
    doc.setFontSize(12);
    t += 8

    doc.text('Address:', l, t)
    doc.text(address, l + 40, t)
    t += 6

    doc.text('City:', l, t)
    doc.text(city, l + 40, t)
    doc.text('State:', l + 70, t)
    doc.text(state, l + 90, t)
    doc.text('Zip:', l + 140, t)
    doc.text(zip, l + 160, t)
    t += 6
    doc.line(l, t, 200, t);
    t += 10

    // Contact
    doc.setFontSize(10);
    doc.text('Contact', l, t)
    doc.setFontSize(12);
    t += 8

    doc.text('Phone:', l, t)
    doc.text(phone, l + 40, t)
    doc.text('Email:', l + 80, t)
    doc.text(email, l + 120, t)

    let blobPDF = new Blob([doc.output('blob')], { type: 'application/pdf', name: 'review.pdf' });
    let blobURL = URL.createObjectURL(blobPDF);
    // window.open(blobURL)
    return blobURL
}
