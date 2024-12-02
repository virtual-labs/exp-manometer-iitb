let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600">Fluid Mechanics: Pressure and its measurement</h4>

        <div class="fs-16px">
        <p style="text-align: center">U-tube Manometer</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    calculation();
    let btn_text = get_collapse_btn_text("Activity 1", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <p>A liquid of specific gravity 0.8 is flowing through the pipe. The manometric fluid is mercury of specific gravity 13.6. Find the pressure inside the pipe.</p>
        <p>Take the values, <br> h1 = ${(h1 * 100).toFixed(0)} cm, h2 = ${h2 * 100} cm, h3 = h2 - h1 = ${A} cm</p>
        <p style="text-align:center"><img src="images/sim1.png" style='width: 30%;' /></p>
        <br>
        <p style='text-align: center;'>Figure 1</p>
        <br>
        <p>Equating the pressure A - A</p>
        <p> $$ P + \\rho_1 * g * h_1 = P + \\rho_2 * g * h_2 $$</p>
        <p> $$ P = \\rho_2 * g * h_2 - \\rho_1 * g * h_1 $$</p>
        <p style="text-align: center"><span style="display: inline-block">$$\\qquad\\qquad\\qquad\\qquad\\qquad=$$</span> <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='pressure-inp'><span id='pressure-val-sp'></span> N/m<sup>2</sup>
        <button class='btn btn-info std-btn' style='position: relative; left: 2vw;' onclick='verify_pressure();' id='temp-btn-2' >Verify</button></p>
    </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb1-box');
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function calculation() {
    A = Math.floor(Math.random() * (3 + 1)) + 12;
    console.log("A = ", A);
    let B = 20;
    h1 = (B - A) / 100;
    console.log("h1= ", h1);
    h2 = B / 100;
    console.log("h2= ", h2);
    pressure = ((specific_gravity_2 * 1000) * gravity * h2) - ((specific_gravity_1 * 1000) * gravity * h1);
    console.log("pressure= ", pressure);
    act2_pressure = ((specific_gravity_1 * 1000) * gravity * h2) - ((specific_gravity_1 * 1000) * gravity * h1);
    console.log("act2 pressure= ", act2_pressure);
}
function verify_pressure() {
    let btn = document.getElementById('temp-btn-2');
    let pressure_inp = document.getElementById('pressure-inp');
    let sp1 = document.getElementById('pressure-val-sp');
    console.log("inp pressure= ", pressure);
    if (!verify_values(parseFloat(parseFloat(pressure_inp.value).toFixed(2)), parseFloat(pressure.toFixed(2)))) {
        alert(`incorrect value of pressure`);
        return;
    }
    pressure_inp.remove();
    sp1.innerText = `${parseFloat(pressure.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    start_act2();
}
// function verify_density() {
//     let btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('temp-btn-density');
//     let density_inp: HTMLInputElement = <HTMLInputElement> document.getElementById('density-inp');
//     let sp2: HTMLSpanElement = <HTMLSpanElement> document.getElementById('density-val-sp');
//     console.log("inp density= ",density_inp.value);
//     // inp_volume = <HTMLInputElement> document.getElementById(`volume_inp`);
//     if(!verify_values(parseFloat(parseFloat(density_inp.value).toFixed(2)), parseFloat(density.toFixed(2)))) {
//         alert(`incorrect value of density`);
//         return;
//     }
//     density_inp.remove();
//     sp2.innerText = `${density}`;
//     //btn.remove();
//     if(btn) {
//         btn.remove();
//     }
//     calculations();
// }
activity1();
//# sourceMappingURL=activity1.js.map