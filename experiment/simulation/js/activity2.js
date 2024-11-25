// function activity2() {
//     let text = `
//         <div class='divide'>
//             <div style='margin-top: 2vw;'>
//                 <br>
//                 <div class="fs-16px">
//                     <p>Calculate the density, specific gravity and specific weight of 1 litre of liquid having weight ${weight} N</p>
//                 </div>
//                 <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-act-2' >Next</button>
//             </div>
//         </div>
//         `;
//     maindiv.innerHTML += text;
//     setTimeout(() => {MathJax.typeset();}, 300);
// }
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-act-2');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Activity 2", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>
        <p>A liquid of specific gravity 0.8 is flowing through the pipe. The manometric fluid is water of specific gravity 1. Find the pressure inside the pipe.</p>
        <p>Take the values, <br> h1 = ${h1}, h2 = ${h2}, h3 = ${A}</p>
        <p style="text-align:center"><img src="images/sim1.png" style='width: 30%;' /></p>
        <br>
        <p style='text-align: center;'>Figure 1</p>
        <br>
        <p>Equating the pressure A - A</p>
        <p> $$ P + \\rho_1 * g * h_1 = P + \\rho_2 * g * h_2 $$</p>
        <p> $$ P = \\rho_2 * g * h_2 - \\rho_1 * g * h_1 $$</p>
        <p style="text-align: center"><span style="display: inline-block">$$\\qquad\\qquad\\qquad\\qquad\\qquad=$$</span> <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='act2_pressure-inp'><span id='act2_pressure-val-sp'></span> N/m<sup>2</sup>
        <button class='btn btn-info std-btn' style='position: relative; left: 2vw;' onclick='act2_verify_pressure();' id='temp-btn-3' >Verify</button></p>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb2-box');
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function act2_verify_pressure() {
    let btn = document.getElementById('temp-btn-3');
    let act2_pressure_inp = document.getElementById('act2_pressure-inp');
    let sp2 = document.getElementById('act2_pressure-val-sp');
    console.log("inp pressure= ", act2_pressure);
    if (!verify_values(parseFloat(parseFloat(act2_pressure_inp.value).toFixed(2)), parseFloat(act2_pressure.toFixed(2)))) {
        alert(`incorrect value of pressure`);
        return;
    }
    act2_pressure_inp.remove();
    sp2.innerText = `${parseFloat(act2_pressure.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    exp_complete();
}
// function act2_verify_volume() {
//     let btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('act2-temp-btn-2');
//     let act2_volume_inp1: HTMLInputElement = <HTMLInputElement> document.getElementById('act2-volume-inp');
//     let act2_sp1: HTMLSpanElement = <HTMLSpanElement> document.getElementById('act2-volume-val-sp');
//     console.log("inp vol= ",act2_volume_inp1.value);
//     // inp_volume = <HTMLInputElement> document.getElementById(`volume_inp`);
//     if(!verify_values(parseFloat(parseFloat(act2_volume_inp1.value).toFixed(2)), parseFloat(volume.toFixed(2)))) {
//         alert(`incorrect value of volume`);
//         return;
//     }
//     act2_volume_inp1.remove();
//     act2_sp1.innerText = `${volume}`;
//     //btn.remove();
//     if(btn) {
//         btn.remove();
//     }
//     let div: HTMLDivElement = <HTMLDivElement>(
//         document.getElementById('act2-mass-div')
// 	);
// 	div.style.display = 'block';
// }
// function act2_verify_mass() {
//     let btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('temp-btn-act2-mass');
//     let act2_mass_inp: HTMLInputElement = <HTMLInputElement> document.getElementById('act2-mass-inp');
//     let act2_sp2: HTMLSpanElement = <HTMLSpanElement> document.getElementById('act2-mass-val-sp');
//     console.log("inp mass act2= ",act2_mass_inp.value);
//     if(!verify_values(parseFloat(parseFloat(act2_mass_inp.value).toFixed(2)), parseFloat(act2_mass.toFixed(2)))) {
//         alert(`incorrect value of volume`);
//         return;
//     }
//     act2_mass_inp.remove();
//     act2_sp2.innerText = `${parseFloat(act2_mass.toFixed(4))}`;
//     //btn.remove();
//     if(btn) {
//         btn.remove();
//     }
//     let div: HTMLDivElement = <HTMLDivElement>(
//         document.getElementById('act2-density-div')
// 	);
// 	div.style.display = 'block';
// }
// function act2_verify_density() {
//     let btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('temp-btn-act2-density');
//     let act2_density_inp: HTMLInputElement = <HTMLInputElement> document.getElementById('act2-density-inp');
//     let act2_sp2: HTMLSpanElement = <HTMLSpanElement> document.getElementById('act2-density-val-sp');
//     console.log("inp density act2= ",act2_density_inp.value);
//     if(!verify_values(parseFloat(parseFloat(act2_density_inp.value).toFixed(2)), parseFloat(act2_density.toFixed(2)))) {
//         alert(`incorrect value of volume`);
//         return;
//     }
//     act2_density_inp.remove();
//     act2_sp2.innerText = `${parseFloat(act2_density.toFixed(4))}`;
//     //btn.remove();
//     if(btn) {
//         btn.remove();
//     }
//     let div: HTMLDivElement = <HTMLDivElement>(
//         document.getElementById('act2-spgr-div')
// 	);
// 	div.style.display = 'block';
// }
// function act2_verify_specific_gravity() {
//     let btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('temp-btn-act2-spgr');
//     let act2_spgr_inp: HTMLInputElement = <HTMLInputElement> document.getElementById('act2-spgr-inp');
//     let act2_sp2: HTMLSpanElement = <HTMLSpanElement> document.getElementById('act2-spgr-val-sp');
//     console.log("inp spgr act2= ",act2_spgr_inp.value);
//     if(!verify_values(parseFloat(parseFloat(act2_spgr_inp.value).toFixed(2)), parseFloat(specific_gravity.toFixed(2)))) {
//         alert(`incorrect value of volume`);
//         return;
//     }
//     act2_spgr_inp.remove();
//     act2_sp2.innerText = `${parseFloat(specific_gravity.toFixed(4))}`;
//     //btn.remove();
//     if(btn) {
//         btn.remove();
//     }
//     let div: HTMLDivElement = <HTMLDivElement>(
//         document.getElementById('act2-spwt-div')
// 	);
// 	div.style.display = 'block';
// }
// function act2_verify_specific_weight() {
//     let btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('temp-btn-act2-spwt');
//     let act2_spwt_inp: HTMLInputElement = <HTMLInputElement> document.getElementById('act2-spwt-inp');
//     let act2_sp2: HTMLSpanElement = <HTMLSpanElement> document.getElementById('act2-spwt-val-sp');
//     console.log("inp spwt act2= ",act2_spwt_inp.value);
//     if(!verify_values(parseFloat(parseFloat(act2_spwt_inp.value).toFixed(2)), parseFloat(specific_weight.toFixed(2)))) {
//         alert(`incorrect value of volume`);
//         return;
//     }
//     act2_spwt_inp.remove();
//     act2_sp2.innerText = `${parseFloat(specific_weight.toFixed(4))}`;
//     //btn.remove();
//     if(btn) {
//         btn.remove();
//     }
//     exp_complete();
// }
function exp_complete() {
    let btn = (document.getElementById('temp-btn-act2-spwt'));
    btn && btn.remove();
    alert('Experiment completed');
}
//# sourceMappingURL=activity2.js.map