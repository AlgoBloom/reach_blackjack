// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc1, ctc1],
      3: [ctc0, ctc1, ctc2, ctc0, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Dealer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Dealer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Dealer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v202 = stdlib.protect(ctc0, interact.deadline, 'for Dealer\'s interact field deadline');
  const v203 = stdlib.protect(ctc0, interact.wager, 'for Dealer\'s interact field wager');
  
  const v206 = stdlib.protect(ctc0, await interact.drawCards(), {
    at: './index.rsh:47:47:application',
    fs: ['at ./index.rsh:45:16:application call to [unknown function] (defined at: ./index.rsh:45:20:function exp)'],
    msg: 'drawCards',
    who: 'Dealer'
    });
  const v207 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:48:60:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:45:16:application call to [unknown function] (defined at: ./index.rsh:45:20:function exp)'],
    msg: 'random',
    who: 'Dealer'
    });
  const v208 = stdlib.digest(ctc1, [v207, v206]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v203, v208, v202],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:53:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc2, ctc0],
    pay: [v203, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v211, v212, v213], secs: v215, time: v214, didSend: v37, from: v210 } = txn1;
      
      sim_r.txns.push({
        amt: v211,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v224 = stdlib.add(v214, v213);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v211, v212, v213], secs: v215, time: v214, didSend: v37, from: v210 } = txn1;
  ;
  const v224 = stdlib.add(v214, v213);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: ['time', v224],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v210, v211, v212, v213, v224],
      evt_cnt: 0,
      funcNum: 2,
      lct: v214,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v338, time: v337, didSend: v177, from: v336 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v210,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc2, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v338, time: v337, didSend: v177, from: v336 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:37:35:application',
      fs: ['at ./index.rsh:36:13:application call to [unknown function] (defined at: ./index.rsh:36:35:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:35:30:function exp)', 'at ./index.rsh:64:55:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Dealer'
      });
    
    return;
    
    }
  else {
    const {data: [v230], secs: v232, time: v231, didSend: v48, from: v229 } = txn2;
    const v234 = stdlib.add(v211, v211);
    ;
    const v241 = stdlib.add(v231, v213);
    const txn3 = await (ctc.sendrecv({
      args: [v210, v211, v212, v229, v230, v234, v241, v207, v206],
      evt_cnt: 2,
      funcNum: 3,
      lct: v231,
      onlyIf: true,
      out_tys: [ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:72:12:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v246, v247], secs: v249, time: v248, didSend: v58, from: v245 } = txn3;
        
        ;
        const v253 = stdlib.eq(v247, v230);
        const v254 = stdlib.eq(v247, stdlib.checkedBigNumberify('./index.rsh:78:24:decimal', stdlib.UInt_max, '21'));
        const v255 = stdlib.eq(v230, stdlib.checkedBigNumberify('./index.rsh:79:24:decimal', stdlib.UInt_max, '21'));
        const v256 = stdlib.gt(v230, stdlib.checkedBigNumberify('./index.rsh:80:23:decimal', stdlib.UInt_max, '21'));
        const v257 = stdlib.gt(v247, stdlib.checkedBigNumberify('./index.rsh:81:23:decimal', stdlib.UInt_max, '21'));
        const v258 = stdlib.gt(v230, v247);
        const v259 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')];
        const v260 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')];
        const v261 = v258 ? v259 : v260;
        const v262 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')];
        const v263 = v257 ? v262 : v261;
        const v264 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')];
        const v265 = v256 ? v264 : v263;
        const v266 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
        const v267 = v255 ? v266 : v265;
        const v268 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
        const v269 = v254 ? v268 : v267;
        const v270 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v271 = v253 ? v270 : v269;
        const v272 = v271[stdlib.checkedBigNumberify('./index.rsh:76:11:array', stdlib.UInt_max, '0')];
        const v273 = v271[stdlib.checkedBigNumberify('./index.rsh:76:11:array', stdlib.UInt_max, '1')];
        const v274 = stdlib.eq(v273, stdlib.checkedBigNumberify('./index.rsh:86:26:decimal', stdlib.UInt_max, '0'));
        const v275 = stdlib.eq(v273, stdlib.checkedBigNumberify('./index.rsh:87:26:decimal', stdlib.UInt_max, '1'));
        const v276 = stdlib.eq(v273, stdlib.checkedBigNumberify('./index.rsh:88:26:decimal', stdlib.UInt_max, '2'));
        const v277 = stdlib.eq(v273, stdlib.checkedBigNumberify('./index.rsh:89:26:decimal', stdlib.UInt_max, '3'));
        const v278 = stdlib.eq(v273, stdlib.checkedBigNumberify('./index.rsh:90:26:decimal', stdlib.UInt_max, '4'));
        const v279 = stdlib.eq(v273, stdlib.checkedBigNumberify('./index.rsh:91:26:decimal', stdlib.UInt_max, '5'));
        const v280 = stdlib.eq(v273, stdlib.checkedBigNumberify('./index.rsh:92:26:decimal', stdlib.UInt_max, '6'));
        const v281 = v280 ? stdlib.checkedBigNumberify('./index.rsh:92:30:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:93:9:decimal', stdlib.UInt_max, '1');
        const v282 = v279 ? stdlib.checkedBigNumberify('./index.rsh:91:30:decimal', stdlib.UInt_max, '2') : v281;
        const v283 = v278 ? stdlib.checkedBigNumberify('./index.rsh:90:30:decimal', stdlib.UInt_max, '2') : v282;
        const v284 = v277 ? stdlib.checkedBigNumberify('./index.rsh:89:30:decimal', stdlib.UInt_max, '0') : v283;
        const v285 = v276 ? stdlib.checkedBigNumberify('./index.rsh:88:30:decimal', stdlib.UInt_max, '2') : v284;
        const v286 = v275 ? stdlib.checkedBigNumberify('./index.rsh:87:30:decimal', stdlib.UInt_max, '0') : v285;
        const v287 = v274 ? stdlib.checkedBigNumberify('./index.rsh:86:30:decimal', stdlib.UInt_max, '1') : v286;
        const v288 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:96:26:decimal', stdlib.UInt_max, '0'));
        const v289 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:97:26:decimal', stdlib.UInt_max, '1'));
        const v290 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:98:26:decimal', stdlib.UInt_max, '2'));
        const v291 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:99:26:decimal', stdlib.UInt_max, '3'));
        const v292 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:100:26:decimal', stdlib.UInt_max, '4'));
        const v293 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:101:26:decimal', stdlib.UInt_max, '5'));
        const v294 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:102:26:decimal', stdlib.UInt_max, '6'));
        const v295 = v294 ? stdlib.checkedBigNumberify('./index.rsh:102:30:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:103:9:decimal', stdlib.UInt_max, '1');
        const v296 = v293 ? stdlib.checkedBigNumberify('./index.rsh:101:30:decimal', stdlib.UInt_max, '2') : v295;
        const v297 = v292 ? stdlib.checkedBigNumberify('./index.rsh:100:30:decimal', stdlib.UInt_max, '2') : v296;
        const v298 = v291 ? stdlib.checkedBigNumberify('./index.rsh:99:30:decimal', stdlib.UInt_max, '0') : v297;
        const v299 = v290 ? stdlib.checkedBigNumberify('./index.rsh:98:30:decimal', stdlib.UInt_max, '2') : v298;
        const v300 = v289 ? stdlib.checkedBigNumberify('./index.rsh:97:30:decimal', stdlib.UInt_max, '0') : v299;
        const v301 = v288 ? stdlib.checkedBigNumberify('./index.rsh:96:30:decimal', stdlib.UInt_max, '1') : v300;
        const v302 = stdlib.mul(v301, v211);
        sim_r.txns.push({
          kind: 'from',
          to: v210,
          tok: undefined /* Nothing */
          });
        const v307 = stdlib.mul(v287, v211);
        sim_r.txns.push({
          kind: 'from',
          to: v229,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v241],
      tys: [ctc4, ctc0, ctc2, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v210, v211, v212, v229, v230, v234, v241],
        evt_cnt: 0,
        funcNum: 4,
        lct: v231,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v320, time: v319, didSend: v146, from: v318 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v229,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc0, ctc2, ctc4, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v320, time: v319, didSend: v146, from: v318 } = txn4;
      ;
      const v321 = stdlib.addressEq(v210, v318);
      const v322 = stdlib.addressEq(v229, v318);
      const v323 = v321 ? true : v322;
      stdlib.assert(v323, {
        at: 'reach standard library:200:11:dot',
        fs: ['at ./index.rsh:73:55:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'sender correct',
        who: 'Dealer'
        });
      ;
      stdlib.protect(ctc3, await interact.informTimeout(), {
        at: './index.rsh:37:35:application',
        fs: ['at ./index.rsh:36:13:application call to [unknown function] (defined at: ./index.rsh:36:35:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:35:30:function exp)', 'at ./index.rsh:73:55:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'informTimeout',
        who: 'Dealer'
        });
      
      return;
      
      }
    else {
      const {data: [v246, v247], secs: v249, time: v248, didSend: v58, from: v245 } = txn3;
      ;
      const v250 = stdlib.addressEq(v210, v245);
      stdlib.assert(v250, {
        at: './index.rsh:72:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Dealer'
        });
      const v251 = stdlib.digest(ctc1, [v246, v247]);
      const v252 = stdlib.digestEq(v212, v251);
      stdlib.assert(v252, {
        at: 'reach standard library:69:17:application',
        fs: ['at ./index.rsh:74:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
        msg: null,
        who: 'Dealer'
        });
      const v253 = stdlib.eq(v247, v230);
      const v254 = stdlib.eq(v247, stdlib.checkedBigNumberify('./index.rsh:78:24:decimal', stdlib.UInt_max, '21'));
      const v255 = stdlib.eq(v230, stdlib.checkedBigNumberify('./index.rsh:79:24:decimal', stdlib.UInt_max, '21'));
      const v256 = stdlib.gt(v230, stdlib.checkedBigNumberify('./index.rsh:80:23:decimal', stdlib.UInt_max, '21'));
      const v257 = stdlib.gt(v247, stdlib.checkedBigNumberify('./index.rsh:81:23:decimal', stdlib.UInt_max, '21'));
      const v258 = stdlib.gt(v230, v247);
      const v259 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')];
      const v260 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')];
      const v261 = v258 ? v259 : v260;
      const v262 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')];
      const v263 = v257 ? v262 : v261;
      const v264 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')];
      const v265 = v256 ? v264 : v263;
      const v266 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v267 = v255 ? v266 : v265;
      const v268 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v269 = v254 ? v268 : v267;
      const v270 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v271 = v253 ? v270 : v269;
      const v272 = v271[stdlib.checkedBigNumberify('./index.rsh:76:11:array', stdlib.UInt_max, '0')];
      const v273 = v271[stdlib.checkedBigNumberify('./index.rsh:76:11:array', stdlib.UInt_max, '1')];
      const v274 = stdlib.eq(v273, stdlib.checkedBigNumberify('./index.rsh:86:26:decimal', stdlib.UInt_max, '0'));
      const v275 = stdlib.eq(v273, stdlib.checkedBigNumberify('./index.rsh:87:26:decimal', stdlib.UInt_max, '1'));
      const v276 = stdlib.eq(v273, stdlib.checkedBigNumberify('./index.rsh:88:26:decimal', stdlib.UInt_max, '2'));
      const v277 = stdlib.eq(v273, stdlib.checkedBigNumberify('./index.rsh:89:26:decimal', stdlib.UInt_max, '3'));
      const v278 = stdlib.eq(v273, stdlib.checkedBigNumberify('./index.rsh:90:26:decimal', stdlib.UInt_max, '4'));
      const v279 = stdlib.eq(v273, stdlib.checkedBigNumberify('./index.rsh:91:26:decimal', stdlib.UInt_max, '5'));
      const v280 = stdlib.eq(v273, stdlib.checkedBigNumberify('./index.rsh:92:26:decimal', stdlib.UInt_max, '6'));
      const v281 = v280 ? stdlib.checkedBigNumberify('./index.rsh:92:30:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:93:9:decimal', stdlib.UInt_max, '1');
      const v282 = v279 ? stdlib.checkedBigNumberify('./index.rsh:91:30:decimal', stdlib.UInt_max, '2') : v281;
      const v283 = v278 ? stdlib.checkedBigNumberify('./index.rsh:90:30:decimal', stdlib.UInt_max, '2') : v282;
      const v284 = v277 ? stdlib.checkedBigNumberify('./index.rsh:89:30:decimal', stdlib.UInt_max, '0') : v283;
      const v285 = v276 ? stdlib.checkedBigNumberify('./index.rsh:88:30:decimal', stdlib.UInt_max, '2') : v284;
      const v286 = v275 ? stdlib.checkedBigNumberify('./index.rsh:87:30:decimal', stdlib.UInt_max, '0') : v285;
      const v287 = v274 ? stdlib.checkedBigNumberify('./index.rsh:86:30:decimal', stdlib.UInt_max, '1') : v286;
      const v288 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:96:26:decimal', stdlib.UInt_max, '0'));
      const v289 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:97:26:decimal', stdlib.UInt_max, '1'));
      const v290 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:98:26:decimal', stdlib.UInt_max, '2'));
      const v291 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:99:26:decimal', stdlib.UInt_max, '3'));
      const v292 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:100:26:decimal', stdlib.UInt_max, '4'));
      const v293 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:101:26:decimal', stdlib.UInt_max, '5'));
      const v294 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:102:26:decimal', stdlib.UInt_max, '6'));
      const v295 = v294 ? stdlib.checkedBigNumberify('./index.rsh:102:30:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:103:9:decimal', stdlib.UInt_max, '1');
      const v296 = v293 ? stdlib.checkedBigNumberify('./index.rsh:101:30:decimal', stdlib.UInt_max, '2') : v295;
      const v297 = v292 ? stdlib.checkedBigNumberify('./index.rsh:100:30:decimal', stdlib.UInt_max, '2') : v296;
      const v298 = v291 ? stdlib.checkedBigNumberify('./index.rsh:99:30:decimal', stdlib.UInt_max, '0') : v297;
      const v299 = v290 ? stdlib.checkedBigNumberify('./index.rsh:98:30:decimal', stdlib.UInt_max, '2') : v298;
      const v300 = v289 ? stdlib.checkedBigNumberify('./index.rsh:97:30:decimal', stdlib.UInt_max, '0') : v299;
      const v301 = v288 ? stdlib.checkedBigNumberify('./index.rsh:96:30:decimal', stdlib.UInt_max, '1') : v300;
      const v302 = stdlib.mul(v301, v211);
      ;
      const v307 = stdlib.mul(v287, v211);
      ;
      stdlib.protect(ctc3, await interact.seeOutcome(v272), {
        at: './index.rsh:115:28:application',
        fs: ['at ./index.rsh:114:16:application call to [unknown function] (defined at: ./index.rsh:114:20:function exp)'],
        msg: 'seeOutcome',
        who: 'Dealer'
        });
      
      return;
      }
    
    }
  
  
  
  };
export async function Player(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v211, v212, v213], secs: v215, time: v214, didSend: v37, from: v210 } = txn1;
  ;
  const v224 = stdlib.add(v214, v213);
  stdlib.protect(ctc2, await interact.acceptWager(v211), {
    at: './index.rsh:59:29:application',
    fs: ['at ./index.rsh:58:16:application call to [unknown function] (defined at: ./index.rsh:58:20:function exp)'],
    msg: 'acceptWager',
    who: 'Player'
    });
  const v228 = stdlib.protect(ctc0, await interact.drawCards(), {
    at: './index.rsh:60:57:application',
    fs: ['at ./index.rsh:58:16:application call to [unknown function] (defined at: ./index.rsh:58:20:function exp)'],
    msg: 'drawCards',
    who: 'Player'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v210, v211, v212, v213, v224, v228],
    evt_cnt: 1,
    funcNum: 1,
    lct: v214,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v211, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v230], secs: v232, time: v231, didSend: v48, from: v229 } = txn2;
      
      const v234 = stdlib.add(v211, v211);
      sim_r.txns.push({
        amt: v211,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v241 = stdlib.add(v231, v213);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v224],
    tys: [ctc4, ctc0, ctc1, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v210, v211, v212, v213, v224],
      evt_cnt: 0,
      funcNum: 2,
      lct: v214,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v338, time: v337, didSend: v177, from: v336 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v210,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc1, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v338, time: v337, didSend: v177, from: v336 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:37:35:application',
      fs: ['at ./index.rsh:36:13:application call to [unknown function] (defined at: ./index.rsh:36:35:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:35:30:function exp)', 'at ./index.rsh:64:55:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Player'
      });
    
    return;
    
    }
  else {
    const {data: [v230], secs: v232, time: v231, didSend: v48, from: v229 } = txn2;
    const v234 = stdlib.add(v211, v211);
    ;
    const v241 = stdlib.add(v231, v213);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 3,
      out_tys: [ctc0, ctc0],
      timeoutAt: ['time', v241],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v210, v211, v212, v229, v230, v234, v241],
        evt_cnt: 0,
        funcNum: 4,
        lct: v231,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v320, time: v319, didSend: v146, from: v318 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v229,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc0, ctc1, ctc4, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v320, time: v319, didSend: v146, from: v318 } = txn4;
      ;
      const v321 = stdlib.addressEq(v210, v318);
      const v322 = stdlib.addressEq(v229, v318);
      const v323 = v321 ? true : v322;
      stdlib.assert(v323, {
        at: 'reach standard library:200:11:dot',
        fs: ['at ./index.rsh:73:55:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'sender correct',
        who: 'Player'
        });
      ;
      stdlib.protect(ctc2, await interact.informTimeout(), {
        at: './index.rsh:37:35:application',
        fs: ['at ./index.rsh:36:13:application call to [unknown function] (defined at: ./index.rsh:36:35:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:35:30:function exp)', 'at ./index.rsh:73:55:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'informTimeout',
        who: 'Player'
        });
      
      return;
      
      }
    else {
      const {data: [v246, v247], secs: v249, time: v248, didSend: v58, from: v245 } = txn3;
      ;
      const v250 = stdlib.addressEq(v210, v245);
      stdlib.assert(v250, {
        at: './index.rsh:72:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Player'
        });
      const v251 = stdlib.digest(ctc3, [v246, v247]);
      const v252 = stdlib.digestEq(v212, v251);
      stdlib.assert(v252, {
        at: 'reach standard library:69:17:application',
        fs: ['at ./index.rsh:74:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
        msg: null,
        who: 'Player'
        });
      const v253 = stdlib.eq(v247, v230);
      const v254 = stdlib.eq(v247, stdlib.checkedBigNumberify('./index.rsh:78:24:decimal', stdlib.UInt_max, '21'));
      const v255 = stdlib.eq(v230, stdlib.checkedBigNumberify('./index.rsh:79:24:decimal', stdlib.UInt_max, '21'));
      const v256 = stdlib.gt(v230, stdlib.checkedBigNumberify('./index.rsh:80:23:decimal', stdlib.UInt_max, '21'));
      const v257 = stdlib.gt(v247, stdlib.checkedBigNumberify('./index.rsh:81:23:decimal', stdlib.UInt_max, '21'));
      const v258 = stdlib.gt(v230, v247);
      const v259 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')];
      const v260 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')];
      const v261 = v258 ? v259 : v260;
      const v262 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')];
      const v263 = v257 ? v262 : v261;
      const v264 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')];
      const v265 = v256 ? v264 : v263;
      const v266 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v267 = v255 ? v266 : v265;
      const v268 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v269 = v254 ? v268 : v267;
      const v270 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v271 = v253 ? v270 : v269;
      const v272 = v271[stdlib.checkedBigNumberify('./index.rsh:76:11:array', stdlib.UInt_max, '0')];
      const v273 = v271[stdlib.checkedBigNumberify('./index.rsh:76:11:array', stdlib.UInt_max, '1')];
      const v274 = stdlib.eq(v273, stdlib.checkedBigNumberify('./index.rsh:86:26:decimal', stdlib.UInt_max, '0'));
      const v275 = stdlib.eq(v273, stdlib.checkedBigNumberify('./index.rsh:87:26:decimal', stdlib.UInt_max, '1'));
      const v276 = stdlib.eq(v273, stdlib.checkedBigNumberify('./index.rsh:88:26:decimal', stdlib.UInt_max, '2'));
      const v277 = stdlib.eq(v273, stdlib.checkedBigNumberify('./index.rsh:89:26:decimal', stdlib.UInt_max, '3'));
      const v278 = stdlib.eq(v273, stdlib.checkedBigNumberify('./index.rsh:90:26:decimal', stdlib.UInt_max, '4'));
      const v279 = stdlib.eq(v273, stdlib.checkedBigNumberify('./index.rsh:91:26:decimal', stdlib.UInt_max, '5'));
      const v280 = stdlib.eq(v273, stdlib.checkedBigNumberify('./index.rsh:92:26:decimal', stdlib.UInt_max, '6'));
      const v281 = v280 ? stdlib.checkedBigNumberify('./index.rsh:92:30:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:93:9:decimal', stdlib.UInt_max, '1');
      const v282 = v279 ? stdlib.checkedBigNumberify('./index.rsh:91:30:decimal', stdlib.UInt_max, '2') : v281;
      const v283 = v278 ? stdlib.checkedBigNumberify('./index.rsh:90:30:decimal', stdlib.UInt_max, '2') : v282;
      const v284 = v277 ? stdlib.checkedBigNumberify('./index.rsh:89:30:decimal', stdlib.UInt_max, '0') : v283;
      const v285 = v276 ? stdlib.checkedBigNumberify('./index.rsh:88:30:decimal', stdlib.UInt_max, '2') : v284;
      const v286 = v275 ? stdlib.checkedBigNumberify('./index.rsh:87:30:decimal', stdlib.UInt_max, '0') : v285;
      const v287 = v274 ? stdlib.checkedBigNumberify('./index.rsh:86:30:decimal', stdlib.UInt_max, '1') : v286;
      const v288 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:96:26:decimal', stdlib.UInt_max, '0'));
      const v289 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:97:26:decimal', stdlib.UInt_max, '1'));
      const v290 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:98:26:decimal', stdlib.UInt_max, '2'));
      const v291 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:99:26:decimal', stdlib.UInt_max, '3'));
      const v292 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:100:26:decimal', stdlib.UInt_max, '4'));
      const v293 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:101:26:decimal', stdlib.UInt_max, '5'));
      const v294 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:102:26:decimal', stdlib.UInt_max, '6'));
      const v295 = v294 ? stdlib.checkedBigNumberify('./index.rsh:102:30:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:103:9:decimal', stdlib.UInt_max, '1');
      const v296 = v293 ? stdlib.checkedBigNumberify('./index.rsh:101:30:decimal', stdlib.UInt_max, '2') : v295;
      const v297 = v292 ? stdlib.checkedBigNumberify('./index.rsh:100:30:decimal', stdlib.UInt_max, '2') : v296;
      const v298 = v291 ? stdlib.checkedBigNumberify('./index.rsh:99:30:decimal', stdlib.UInt_max, '0') : v297;
      const v299 = v290 ? stdlib.checkedBigNumberify('./index.rsh:98:30:decimal', stdlib.UInt_max, '2') : v298;
      const v300 = v289 ? stdlib.checkedBigNumberify('./index.rsh:97:30:decimal', stdlib.UInt_max, '0') : v299;
      const v301 = v288 ? stdlib.checkedBigNumberify('./index.rsh:96:30:decimal', stdlib.UInt_max, '1') : v300;
      const v302 = stdlib.mul(v301, v211);
      ;
      const v307 = stdlib.mul(v287, v211);
      ;
      stdlib.protect(ctc2, await interact.seeOutcome(v273), {
        at: './index.rsh:111:28:application',
        fs: ['at ./index.rsh:110:16:application call to [unknown function] (defined at: ./index.rsh:110:20:function exp)'],
        msg: 'seeOutcome',
        who: 'Player'
        });
      
      return;
      }
    
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAMAAECAwQVCCAFeAZQJgMBAAEBACI1ADEYQQOhKmRJIls1ASEGWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kkDEACKkklDEAB5kkhBAxAAFYhBBJEJTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDV0ggNf+ABJEnNPOwMgY0AyEJWw9ENANXACAxABI0/zEAEhFEsSKyATQDgXBbsggjshA0/7IHs0ICwEglNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSVcAIDX/IQdbNf6BaFs1/Uk1BUkiWzX8IQZbNfuABKSl8Ig0/BZQNPsWULAyBjQDIQlbDEQ0/zEAEkQ0A1coIDT8FjT7FlABEkSAEAAAAAAAAAAFAAAAAAAAAAaAEAAAAAAAAAAGAAAAAAAAAAU0/TT7DU2AEAAAAAAAAAADAAAAAAAAAAQ0+yEFDU2AEAAAAAAAAAAEAAAAAAAAAAM0/SEFDU2AEAAAAAAAAAABAAAAAAAAAAI0/SEFEk2AEAAAAAAAAAACAAAAAAAAAAE0+yEFEk2BEK80+zT9Ek1JNfoiWzX5NPohBls1+LEisgEjIjT5IQoSTSQ0+SEIEk0kNPkhBBJNIjT5JRJNJDT5JBJNIjT5IxJNIzT5IhJNNP4LsggjshA0/7IHs7EisgEjIjT4IQoSTSQ0+CEIEk0kNPghBBJNIjT4JRJNJDT4JBJNIjT4IxJNIzT4IhJNNP4LsggjshA0A1dIILIHs0IBN0gjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQtbD0SxIrIBNAMhB1uyCCOyEDQDVwAgsgezQgD5SSMMQACHSCM0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hB1s1/lcoIDX9STUFFzX8gATVFRkUNPwWULAyBjQDIQtbDEQ0/kkINfs0/ogBFDIGNAOBSFsINfo0/zT+FlA0/VAxAFA0/BZQNPsWUDT6FlAoSwFXAH9nKUsBV38BZ0glNQEyBjUCQgCISIGgjQaIANEiNAESRDQESSISTDQCEhFESTUFSUkiWzX/VwggNf6BKFs1/YAElF1hFjT/FlA0/lA0/RZQsDT/iACXMgY0/Qg1/DEANP8WUDT+UDT9FlA0/BZQKEsBVwBYZ0gjNQEyBjUCQgAcMRkhCBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCUxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 128,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v211",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v212",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v213",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v211",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v212",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v213",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v230",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v246",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v247",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v230",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v246",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v247",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620014383803806200143883398101604081905262000026916200026c565b600080805543600355604080516020808201835292815281513381528451818501528484015180518285015293840151606082015292909101516080830152907fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69060a00160405180910390a1602082015151620000a8903414600762000165565b602082015160400151620000bd904362000303565b81526040805160a08082018352600060208084018281528486018381526060808701858152608080890187815233808b528d8801805151885280518901518752518c015184528c518252600198899055439098558a51808801989098529451878b0152925191860191909152519084015251828401528451808303909301835260c0909101909352805191926200015b92600292909101906200018f565b5050505062000367565b816200018b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200019d906200032a565b90600052602060002090601f016020900481019282620001c157600085556200020c565b82601f10620001dc57805160ff19168380011785556200020c565b828001600101855582156200020c579182015b828111156200020c578251825591602001919060010190620001ef565b506200021a9291506200021e565b5090565b5b808211156200021a57600081556001016200021f565b604051606081016001600160401b03811182821017156200026657634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200028057600080fd5b604080519081016001600160401b0381118282101715620002b157634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002cb57600080fd5b620002d562000235565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600082198211156200032557634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200033f57607f821691505b602082108114156200036157634e487b7160e01b600052602260045260246000fd5b50919050565b6110c180620003776000396000f3fe60806040526004361061006e5760003560e01c8063873779a11161004b578063873779a1146100c3578063a7661d54146100d6578063ab53f2c6146100e9578063ad2d91d11461010c57005b80631e93b0f1146100775780637eea518c1461009b57806383230757146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610dfd565b61011f565b3480156100ba57600080fd5b50600154610088565b6100756100d1366004610dfd565b61029d565b6100756100e4366004610dfd565b61053f565b3480156100f557600080fd5b506100fe6106da565b604051610092929190610e20565b61007561011a366004610e7d565b610777565b61012f600160005414600d610bd6565b6101498135158061014257506001548235145b600e610bd6565b60008080556002805461015b90610e8f565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610e8f565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610ee0565b90506102008160800151431015600f610bd6565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503383604051610231929190610f63565b60405180910390a16102453415600c610bd6565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610282573d6000803e3d6000fd5b506000808055600181905561029990600290610bfb565b5050565b6102ad6001600054146009610bd6565b6102c7813515806102c057506001548235145b600a610bd6565b6000808055600280546102d990610e8f565b80601f016020809104026020016040519081016040528092919081815260200182805461030590610e8f565b80156103525780601f1061032757610100808354040283529160200191610352565b820191906000526020600020905b81548152906001019060200180831161033557829003601f168201915b505050505080602001905181019061036a9190610ee0565b9050610389604051806040016040528060008152602001600081525090565b61039a82608001514310600b610bd6565b6040805133815284356020808301919091528501358183015290517f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f72259181900360600190a160208201516103ee9080610fb6565b815260208201516104029034146008610bd6565b60608201516104119043610fb6565b81602001818152505061046c6040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b82516001600160a01b031681526020808401518183015260408085015181840152336060840152858201356080840152835160a08401528382015160c0840152600360005543600155516105149183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0918201519181019190915260e00190565b60405160208183030381529060405260029080519060200190610538929190610c38565b5050505050565b61054f6003600054146018610bd6565b6105698135158061056257506001548235145b6019610bd6565b60008080556002805461057b90610e8f565b80601f01602080910402602001604051908101604052809291908181526020018280546105a790610e8f565b80156105f45780601f106105c9576101008083540402835291602001916105f4565b820191906000526020600020905b8154815290600101906020018083116105d757829003601f168201915b505050505080602001905181019061060c9190610fce565b90506106208160c00151431015601a610bd6565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223383604051610651929190610f63565b60405180910390a161066534156016610bd6565b8051610699906001600160a01b0316331461068f5760608201516001600160a01b03163314610692565b60015b6017610bd6565b80606001516001600160a01b03166108fc8260a001519081150290604051600060405180830381858888f19350505050158015610282573d6000803e3d6000fd5b6000606060005460028080546106ef90610e8f565b80601f016020809104026020016040519081016040528092919081815260200182805461071b90610e8f565b80156107685780601f1061073d57610100808354040283529160200191610768565b820191906000526020600020905b81548152906001019060200180831161074b57829003601f168201915b50505050509050915091509091565b6107876003600054146013610bd6565b6107a18135158061079a57506001548235145b6014610bd6565b6000808055600280546107b390610e8f565b80601f01602080910402602001604051908101604052809291908181526020018280546107df90610e8f565b801561082c5780601f106108015761010080835404028352916020019161082c565b820191906000526020600020905b81548152906001019060200180831161080f57829003601f168201915b50505050508060200190518101906108449190610fce565b905061084e610cbc565b61085f8260c0015143106015610bd6565b604080513381528435602080830191909152850135818301529084013560608201527f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d16349060800160405180910390a16108ba34156010610bd6565b81516108d2906001600160a01b031633146011610bd6565b6040805161091e916108f891602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360400151146012610bd6565b80516006908190528151600560209182018190528184018051919091525181019190915260408083018051600390819052905160049084018190526060850180519190915251830152608080840180516001908190529051600290850181905260a086018051919091525184015260c084018051600090819052905190930192909252908301519084013514610a26576040830135601514610a1c576015826080015114610a12576015826080015111610a085760156040840135116109fe5760808201516040840135106109f7578060200151610a2c565b8051610a2c565b8060400151610a2c565b8060600151610a2c565b8060800151610a2c565b8060a00151610a2c565b8060c001515b60e082018190528251602084015191516001600160a01b03909116916108fc9115610ab45760e084015151600114610aa65760e084015151600214610aad5760e084015151600314610aa65760e084015151600414610aad5760e084015151600514610aad5760e084015151600614610aa6576001610ab7565b6000610ab7565b6002610ab7565b60015b610ac1919061106c565b6040518115909202916000818181858888f19350505050158015610ae9573d6000803e3d6000fd5b5081606001516001600160a01b03166108fc836020015160008460e001516020015114610b855760018460e001516020015114610b775760028460e001516020015114610b7e5760038460e001516020015114610b775760048460e001516020015114610b7e5760058460e001516020015114610b7e5760068460e001516020015114610b77576001610b88565b6000610b88565b6002610b88565b60015b610b92919061106c565b6040518115909202916000818181858888f19350505050158015610bba573d6000803e3d6000fd5b5060008080556001819055610bd190600290610bfb565b505050565b816102995760405163100960cb60e01b81526004810182905260240160405180910390fd5b508054610c0790610e8f565b6000825580601f10610c17575050565b601f016020900490600052602060002090810190610c359190610dd0565b50565b828054610c4490610e8f565b90600052602060002090601f016020900481019282610c665760008555610cac565b82601f10610c7f57805160ff1916838001178555610cac565b82800160010185558215610cac579182015b82811115610cac578251825591602001919060010190610c91565b50610cb8929150610dd0565b5090565b6040805161014081019091526000610100820181815261012083019190915281908152602001610cff604051806040016040528060008152602001600081525090565b8152602001610d21604051806040016040528060008152602001600081525090565b8152602001610d43604051806040016040528060008152602001600081525090565b8152602001610d65604051806040016040528060008152602001600081525090565b8152602001610d87604051806040016040528060008152602001600081525090565b8152602001610da9604051806040016040528060008152602001600081525090565b8152602001610dcb604051806040016040528060008152602001600081525090565b905290565b5b80821115610cb85760008155600101610dd1565b600060408284031215610df757600080fd5b50919050565b600060408284031215610e0f57600080fd5b610e198383610de5565b9392505050565b82815260006020604081840152835180604085015260005b81811015610e5457858101830151858201606001528201610e38565b81811115610e66576000606083870101525b50601f01601f191692909201606001949350505050565b600060608284031215610df757600080fd5b600181811c90821680610ea357607f821691505b60208210811415610df757634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610edb57600080fd5b919050565b600060a08284031215610ef257600080fd5b60405160a0810181811067ffffffffffffffff82111715610f2357634e487b7160e01b600052604160045260246000fd5b604052610f2f83610ec4565b8152602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214610f9157600080fd5b80604085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610fc957610fc9610fa0565b500190565b600060e08284031215610fe057600080fd5b60405160e0810181811067ffffffffffffffff8211171561101157634e487b7160e01b600052604160045260246000fd5b60405261101d83610ec4565b8152602083015160208201526040830151604082015261103f60608401610ec4565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b600081600019048311821515161561108657611086610fa0565b50029056fea2646970667358221220b903a348353f5d6ee46ff3c49908bdbd2d4381fa6ef4bd4ec9c1dc5a5308987c64736f6c634300080c0033`,
  BytecodeLen: 5176,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:55:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:64:55:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:65:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:73:55:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:108:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Dealer": Dealer,
  "Player": Player
  };
export const _APIs = {
  };
