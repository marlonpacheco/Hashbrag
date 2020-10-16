var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#2CD664', '#0082D5'],
                ['#0082D5', '#A234D5'],
                ['#A234D5', '#D74059'],
                ['#CA3058', '#FF9A48'],
                ['#EE6614', '#FDD103'],
                ['#FFDA2E', '#2CD664']
            ],
            transitionSpeed: 4000
        }
    }
});