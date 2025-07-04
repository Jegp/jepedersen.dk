/**
 * Dynamical Systems Simulator - Pure JavaScript Implementation
 * Can be embedded directly in reveal.js presentations
 * 
 * Usage:
 * createDynamicalSystemsSimulator('container-id', {
 *   system: {
 *     name: 'My System',
 *     equation: 'ẋ = -x + u',
 *     simulate: (params, state, dt) => { ... },
 *     parameters: [...],
 *     initialState: { x: 1, y: 0 },
 *     plotType: '2d' | '3d' | 'timeseries',
 *     plotConfig: { ... }
 *   }
 * });
 */

class DynamicalSystemsSimulator {
    constructor(containerId, options = {}) {
        this.containerId = containerId;
        this.container = document.getElementById(containerId);
        this.options = {
            width: options.width || 800,
            height: options.height || 400,
            maxPoints: options.maxPoints || 1000,
            dt: options.dt || 0.02,
            showSystemSelector: options.showSystemSelector !== false,
            ...options
        };
        
        this.animationId = null;
        this.plotData = [];
        this.state = { x: 1, y: 0, z: 1, t: 0 };
        
        // If a single system is provided, use it; otherwise use built-in systems
        if (options.system) {
            this.systems = { custom: options.system };
            this.currentSystem = 'custom';
            this.options.showSystemSelector = false;
        } else {
            this.currentSystem = options.defaultSystem || 'harmonic';
            this.systems = this.getBuiltInSystems();
        }
        
        this.init();
    }
    
    getBuiltInSystems() {
        return {
            harmonic: {
                name: 'Harmonic Oscillator',
                equation: 'ẋ = y, ẏ = -ω²x - 2γy + u',
                parameters: [
                    { id: 'omega', label: 'Frequency (ω)', min: 0.5, max: 3, step: 0.1, value: 1.5 },
                    { id: 'gamma', label: 'Damping (γ)', min: 0, max: 1, step: 0.05, value: 0.1 },
                    { id: 'input', label: 'Input (u)', min: -2, max: 2, step: 0.1, value: 0 }
                ],
                initialState: { x: 1, y: 0, z: 0, t: 0 },
                simulate: (params, state, dt) => {
                    const [omega, gamma, u] = params;
                    const dx = state.y;
                    const dy = -omega * omega * state.x - 2 * gamma * state.y + u;
                    return {
                        x: state.x + dt * dx,
                        y: state.y + dt * dy,
                        z: state.z,
                        t: state.t + dt
                    };
                },
                plotType: '2d',
                plotConfig: {
                    title: 'Phase Space (x vs ẋ)',
                    xaxis: { title: 'Position (x)', range: [-3, 3] },
                    yaxis: { title: 'Velocity (ẋ)', range: [-3, 3] }
                }
            },
            
            vanderpol: {
                name: 'Van der Pol Oscillator',
                equation: 'ẋ = y, ẏ = μ(1-x²)y - x + u',
                parameters: [
                    { id: 'mu', label: 'Nonlinearity (μ)', min: 0.1, max: 3, step: 0.1, value: 1 },
                    { id: 'input', label: 'Input (u)', min: -2, max: 2, step: 0.1, value: 0 }
                ],
                initialState: { x: 0.1, y: 0.1, z: 0, t: 0 },
                simulate: (params, state, dt) => {
                    const [mu, u] = params;
                    const dx = state.y;
                    const dy = mu * (1 - state.x * state.x) * state.y - state.x + u;
                    return {
                        x: state.x + dt * dx,
                        y: state.y + dt * dy,
                        z: state.z,
                        t: state.t + dt
                    };
                },
                plotType: '2d',
                plotConfig: {
                    title: 'Van der Pol Limit Cycle',
                    xaxis: { title: 'x', range: [-3, 3] },
                    yaxis: { title: 'ẋ', range: [-3, 3] }
                }
            },
            
            lorenz: {
                name: 'Lorenz System',
                equation: 'ẋ = σ(y-x), ẏ = x(ρ-z) - y, ż = xy - βz',
                parameters: [
                    { id: 'sigma', label: 'σ (Prandtl)', min: 5, max: 15, step: 0.5, value: 10 },
                    { id: 'rho', label: 'ρ (Rayleigh)', min: 20, max: 35, step: 0.5, value: 28 },
                    { id: 'beta', label: 'β', min: 1, max: 4, step: 0.1, value: 2.67 }
                ],
                initialState: { x: 1, y: 1, z: 1, t: 0 },
                simulate: (params, state, dt) => {
                    const [sigma, rho, beta] = params;
                    const dx = sigma * (state.y - state.x);
                    const dy = state.x * (rho - state.z) - state.y;
                    const dz = state.x * state.y - beta * state.z;
                    return {
                        x: state.x + dt * dx,
                        y: state.y + dt * dy,
                        z: state.z + dt * dz,
                        t: state.t + dt
                    };
                },
                plotType: '3d',
                plotConfig: {
                    title: 'Lorenz Chaotic Attractor'
                }
            },
            
            neural: {
                name: 'Neural Node',
                equation: 'τẋ = -x + tanh(wx + I)',
                parameters: [
                    { id: 'tau', label: 'Time Constant (τ)', min: 0.1, max: 2, step: 0.1, value: 1 },
                    { id: 'weight', label: 'Weight (w)', min: -3, max: 3, step: 0.1, value: 1.5 },
                    { id: 'current', label: 'Input Current (I)', min: -2, max: 2, step: 0.1, value: 0 }
                ],
                initialState: { x: 0.1, y: 0, z: 0, t: 0 },
                simulate: (params, state, dt) => {
                    const [tau, weight, current] = params;
                    const dx = (-state.x + Math.tanh(weight * state.x + current)) / tau;
                    return {
                        x: state.x + dt * dx,
                        y: state.y,
                        z: state.z,
                        t: state.t + dt
                    };
                },
                plotType: 'timeseries',
                plotConfig: {
                    title: 'Neural Activation over Time',
                    xaxis: { title: 'Time', range: [0, 50] },
                    yaxis: { title: 'Activation', range: [-2, 2] }
                }
            }
        };
    }
    
    init() {
        this.createHTML();
        this.setupEventListeners();
        this.reset();
        this.startAnimation();
    }
    
    createHTML() {
        const systemSelectorHTML = this.options.showSystemSelector ? `
            <div class="dynsim-system-selector" style="margin-bottom: 20px;">
                <label style="display: block; font-weight: bold; margin-bottom: 5px;">System:</label>
                <select class="dynsim-system-select" style="width: 100%; padding: 5px; border: 1px solid #ccc; border-radius: 4px;">
                    ${Object.entries(this.systems).map(([key, system]) => 
                        `<option value="${key}" ${key === this.currentSystem ? 'selected' : ''}>${system.name}</option>`
                    ).join('')}
                </select>
            </div>
        ` : '';

        this.container.innerHTML = `
            <div class="dynsim-container" style="display: flex; gap: 10px; font-family: Arial, sans-serif; font-size: 0.8em;">
                <div class="dynsim-controls" style="width: 180px; background: #f8f9fa; padding: 8px; border-radius: 6px; border: 1px solid #ddd;">
                    ${systemSelectorHTML}
                    
                    <div class="dynsim-equation" style="background: #e3f2fd; padding: 6px 8px; margin: 8px 0; border-radius: 4px; font-family: 'Times New Roman', serif; font-size: 0.8em; border-left: 3px solid #2196f3;"></div>
                    
                    <div class="dynsim-params"></div>
                    
                    <div style="display: flex; gap: 4px; margin-top: 8px;">
                        <button class="dynsim-restart" style="flex: 1; padding: 4px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; font-size: 0.7em;">
                            Restart
                        </button>
                        <button class="dynsim-reset" style="flex: 1; padding: 4px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; font-size: 0.7em;">
                            Reset
                        </button>
                    </div>
                </div>
                
                <div class="dynsim-plot" style="flex: 1; height: ${this.options.height}px; border: 1px solid #ddd; border-radius: 6px;"></div>
            </div>
        `;
    }
    
    setupEventListeners() {
        const systemSelect = this.container.querySelector('.dynsim-system-select');
        const resetBtn = this.container.querySelector('.dynsim-reset');
        const restartBtn = this.container.querySelector('.dynsim-restart');
        
        if (systemSelect) {
            systemSelect.addEventListener('change', (e) => {
                this.currentSystem = e.target.value;
                this.updateUI();
                this.reset();
            });
        }
        
        resetBtn.addEventListener('click', () => this.reset());
        restartBtn.addEventListener('click', () => this.restart());
    }
    
    updateUI() {
        const system = this.systems[this.currentSystem];
        
        // Update equation display
        const equationDiv = this.container.querySelector('.dynsim-equation');
        equationDiv.innerHTML = system.equation;
        
        // Update parameter controls
        const paramsDiv = this.container.querySelector('.dynsim-params');
        paramsDiv.innerHTML = system.parameters.map(param => `
            <div style="margin-bottom: 8px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
                    <label style="font-weight: bold; font-size: 0.7em;">${param.label}:&nbsp;<span class="dynsim-param-value" style="background: #e9ecef; padding: 1px 4px; border-radius: 2px; font-size: 0.8em; min-width: 30px; text-align: center;">${param.value.toFixed(2)}</span></label>
                    
                </div>
                <input type="range" 
                       class="dynsim-param" 
                       data-param="${param.id}"
                       min="${param.min}" 
                       max="${param.max}" 
                       step="${param.step}" 
                       value="${param.value}"
                       style="width: 100%; height: 14px;">
            </div>
        `).join('');
        
        // Add slider event listeners
        paramsDiv.querySelectorAll('.dynsim-param').forEach(slider => {
            slider.addEventListener('input', (e) => {
                const valueSpan = e.target.parentElement.querySelector('.dynsim-param-value');
                valueSpan.textContent = parseFloat(e.target.value).toFixed(2);
            });
        });
        
        this.initPlot();
    }
    
    initPlot() {
        const system = this.systems[this.currentSystem];
        const plotDiv = this.container.querySelector('.dynsim-plot');
        
        if (system.plotType === '3d') {
            Plotly.newPlot(plotDiv, [{
                x: [], y: [], z: [],
                mode: 'lines',
                type: 'scatter3d',
                line: { color: '#2196f3', width: 4 }
            }], {
                title: system.plotConfig.title,
                scene: {
                    xaxis: { title: 'X' },
                    yaxis: { title: 'Y' },
                    zaxis: { title: 'Z' }
                },
                margin: { l: 0, r: 0, t: 30, b: 0 }
            });
        } else {
            Plotly.newPlot(plotDiv, [{
                x: [], y: [],
                mode: 'lines',
                line: { color: '#2196f3', width: 2 }
            }], {
                title: system.plotConfig.title,
                xaxis: system.plotConfig.xaxis,
                yaxis: system.plotConfig.yaxis,
                margin: { l: 50, r: 20, t: 40, b: 50 }
            });
        }
    }
    
    getParameters() {
        const sliders = this.container.querySelectorAll('.dynsim-param');
        return Array.from(sliders).map(slider => parseFloat(slider.value));
    }
    
    reset() {
        // Reset state based on system's initial state
        const system = this.systems[this.currentSystem];
        this.state = { ...system.initialState };
        
        this.plotData = [];
        this.updateUI();
    }
    
    restart() {
        // Restart simulation from t=0 but keep current parameter values
        const system = this.systems[this.currentSystem];
        this.state = { ...system.initialState };
        
        this.plotData = [];
        this.initPlot(); // Re-initialize plot without changing UI parameters
    }
    
    animate() {
        const system = this.systems[this.currentSystem];
        const params = this.getParameters();
        
        // Simulate one step
        this.state = system.simulate(params, this.state, this.options.dt);
        
        // Add to plot data
        if (system.plotType === '3d') {
            this.plotData.push([this.state.x, this.state.y, this.state.z]);
        } else if (system.plotType === 'timeseries') {
            this.plotData.push([this.state.t, this.state.x]);
        } else {
            this.plotData.push([this.state.x, this.state.y]);
        }
        
        // For time series, maintain enough data for scrolling
        if (system.plotType === 'timeseries') {
            // Calculate how many points we need for a full window plus buffer
            const windowSize = system.plotConfig.xaxis.range[1] - system.plotConfig.xaxis.range[0];
            const pointsPerWindow = Math.ceil(windowSize / this.options.dt);
            const bufferPoints = Math.ceil(pointsPerWindow * 0.5); // 50% buffer
            const targetPoints = pointsPerWindow + bufferPoints;
            
            // Only trim if we have significantly more points than needed
            if (this.plotData.length > targetPoints * 2) {
                // Keep the most recent targetPoints
                this.plotData = this.plotData.slice(-targetPoints);
            }
        } else {
            // Limit data points for non-timeseries plots
            if (this.plotData.length > this.options.maxPoints) {
                this.plotData.shift();
            }
        }
        
        this.updatePlot();
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    updatePlot() {
        const system = this.systems[this.currentSystem];
        const plotDiv = this.container.querySelector('.dynsim-plot');
        
        if (system.plotType === '3d') {
            const xData = this.plotData.map(d => d[0]);
            const yData = this.plotData.map(d => d[1]);
            const zData = this.plotData.map(d => d[2]);
            
            Plotly.animate(plotDiv, {
                data: [{ x: xData, y: yData, z: zData }]
            }, { transition: { duration: 0 }, frame: { duration: 0 } });
        } else if (system.plotType === 'timeseries') {
            const xData = this.plotData.map(d => d[0]);
            const yData = this.plotData.map(d => d[1]);
            
            // For time series, implement scrolling
            const currentTime = this.state.t;
            const windowSize = system.plotConfig.xaxis.range[1] - system.plotConfig.xaxis.range[0];
            const originalEnd = system.plotConfig.xaxis.range[1];
            
            let xRange;
            if (currentTime > originalEnd) {
                // Scroll: keep windowSize constant, but shift the window
                xRange = [currentTime - windowSize, currentTime];
            } else {
                // Still in original window
                xRange = system.plotConfig.xaxis.range;
            }
            
            // Always update both data and layout to ensure plot updates
            Plotly.react(plotDiv, 
                [{ x: xData, y: yData, mode: 'lines', line: { color: '#2196f3', width: 2 } }],
                {
                    title: system.plotConfig.title,
                    xaxis: { 
                        title: system.plotConfig.xaxis.title,
                        range: xRange
                    },
                    yaxis: system.plotConfig.yaxis,
                    margin: { l: 50, r: 20, t: 40, b: 50 }
                }
            );
        } else {
            const xData = this.plotData.map(d => d[0]);
            const yData = this.plotData.map(d => d[1]);
            
            Plotly.animate(plotDiv, {
                data: [{ x: xData, y: yData }]
            }, { transition: { duration: 0 }, frame: { duration: 0 } });
        }
    }
    
    startAnimation() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        this.animate();
    }
    
    stopAnimation() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }
    
    destroy() {
        this.stopAnimation();
        this.container.innerHTML = '';
    }
}

// Export for use in presentations
window.DynamicalSystemsSimulator = DynamicalSystemsSimulator;

// Utility function for easy initialization
window.createDynamicalSystemsSimulator = function(containerId, options = {}) {
    return new DynamicalSystemsSimulator(containerId, options);
};