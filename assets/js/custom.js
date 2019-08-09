// Really this should be illegal
let style = document.createElement('style');
style.innerHTML = `.archive {
    width: 100% !important;
    padding-right: 0px !important;
}

.page {
    width: 100% !important;
    padding-right: 0px !important;
}

.page__related {
    width: 100% !important;
    padding-right: 0px !important;
}
`;

document.head.append(style);
