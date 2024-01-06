document.addEventListener('DOMContentLoaded', function () {
    const map = document.getElementById('map');
    const tooltip = document.getElementById('tooltip');

    map.addEventListener('load', function () {
        const svgDoc = map.contentDocument;
        const indiaPath = svgDoc.getElementById('IN');

        indiaPath.addEventListener('mouseover', function () {
            const bbox = indiaPath.getBBox();
            tooltip.style.left = bbox.x + bbox.width / 2 + 'px';
            tooltip.style.top = bbox.y - 10 + 'px';
            tooltip.innerHTML = 'India';
            tooltip.style.display = 'block';
        });

        indiaPath.addEventListener('mouseout', function () {
            tooltip.style.display = 'none';
        });
    });
});

