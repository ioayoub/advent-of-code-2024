const entries1 = [
  80784, 81682, 22289, 79525, 62156, 87975, 54635, 43393, 45310, 18324, 36887,
  35723, 78420, 93307, 77342, 69125, 37292, 45553, 27412, 67708, 92078, 48367,
  26852, 42123, 20067, 20239, 50660, 46240, 29502, 77080, 64180, 74942, 73979,
  47999, 36014, 39827, 81418, 47467, 65923, 95054, 59680, 94609, 33451, 69173,
  31769, 85180, 82104, 90955, 83927, 59455, 28681, 54107, 79824, 53890, 94883,
  12797, 66809, 78327, 19780, 55623, 10937, 24262, 92076, 69179, 13764, 92187,
  91328, 24356, 82974, 55924, 65439, 78097, 58045, 72087, 70822, 78511, 39251,
  74623, 32104, 69499, 97919, 37778, 56977, 19100, 29453, 18839, 75434, 58303,
  84924, 99813, 99218, 54262, 61773, 67034, 71788, 83455, 76089, 11003, 80814,
  41928, 52541, 37488, 78475, 57117, 54543, 19050, 80967, 71045, 61189, 75055,
  91573, 50100, 46554, 25154, 19853, 11807, 40158, 92543, 93300, 79628, 19164,
  53719, 38074, 25693, 79321, 25108, 38398, 22073, 98191, 80619, 99138, 49897,
  84225, 14331, 94603, 33642, 14314, 12998, 10989, 68074, 10531, 32312, 66844,
  73563, 33099, 93734, 56538, 55501, 19974, 21308, 37062, 99908, 92651, 81371,
  96268, 58685, 37191, 71956, 28341, 11995, 92426, 30515, 72193, 82150, 19292,
  52076, 26135, 49482, 56103, 62006, 41905, 23782, 39865, 80074, 84213, 19586,
  87133, 67811, 60019, 29057, 77349, 32372, 93055, 82209, 75731, 91276, 90330,
  41180, 81204, 36092, 13033, 34488, 71770, 37630, 87608, 90593, 52792, 33508,
  78150, 18072, 11205, 28801, 89617, 91269, 50829, 96387, 44407, 17491, 77464,
  67053, 67048, 15369, 71812, 96980, 39993, 65498, 88138, 16497, 75624, 84028,
  82572, 14297, 33805, 44778, 14498, 71384, 47173, 60652, 67241, 73276, 46786,
  88795, 95120, 53010, 40256, 26913, 44746, 49866, 50951, 80832, 22643, 84334,
  96028, 39816, 78427, 27147, 35658, 76747, 32896, 98898, 45166, 38602, 17507,
  75567, 71921, 11800, 23973, 80315, 86659, 23014, 33041, 93351, 69088, 71994,
  61532, 98790, 62890, 37723, 56136, 91663, 76413, 89223, 33477, 34541, 82603,
  37730, 25272, 86703, 56755, 74556, 11337, 52534, 60327, 84554, 11381, 99601,
  20139, 25530, 97414, 11269, 66500, 23195, 22872, 94937, 12273, 63364, 14160,
  57473, 19091, 43286, 25975, 57319, 61075, 95980, 47190, 82297, 24071, 85766,
  48467, 16301, 89176, 76512, 61987, 10252, 42503, 75498, 56685, 22338, 40666,
  88276, 69493, 75435, 91561, 99202, 90978, 89712, 48877, 31528, 15135, 47468,
  23557, 46381, 95007, 31053, 26099, 34939, 44252, 54945, 26328, 73116, 16168,
  28518, 25310, 63436, 77562, 80614, 76421, 24521, 17937, 80687, 56076, 64810,
  73278, 58083, 90208, 17793, 92155, 47982, 82069, 39226, 34622, 99735, 22264,
  46131, 90426, 75148, 98835, 80373, 62705, 95974, 54882, 50578, 30132, 22527,
  41027, 69013, 79152, 89330, 85358, 15086, 50002, 42579, 11717, 43825, 50771,
  89105, 84561, 42692, 20001, 40205, 13295, 96020, 47293, 94929, 24422, 62066,
  52303, 79329, 69417, 13062, 41201, 92635, 19834, 34343, 18208, 82611, 12207,
  93804, 51066, 28374, 34107, 13223, 97959, 51054, 82951, 61626, 52816, 67095,
  96825, 34307, 98853, 76437, 71489, 46520, 15288, 34660, 65053, 99414, 85660,
  10245, 12775, 57298, 64105, 36104, 89241, 41045, 16506, 53044, 17425, 56000,
  63575, 50418, 39915, 97542, 97468, 74779, 90120, 91404, 83440, 80583, 16542,
  34305, 95455, 56639, 33983, 36565, 63737, 60378, 80067, 45068, 20720, 24918,
  18264, 43293, 67279, 75286, 19582, 62806, 48345, 45026, 97371, 80754, 97543,
  51110, 23427, 44698, 84624, 74813, 94691, 68498, 30492, 65243, 12244, 14525,
  75430, 73494, 97587, 59739, 38047, 35519, 64167, 52460, 49707, 86581, 93340,
  91249, 35632, 78007, 86640, 84853, 69589, 87840, 15931, 87788, 36704, 56849,
  23845, 58771, 15094, 78669, 67290, 30809, 60616, 99946, 57245, 14346, 95083,
  57974, 22448, 89557, 72735, 80323, 19558, 66100, 29557, 75549, 47979, 81370,
  99542, 92151, 60693, 70590, 93811, 50263, 51728, 48629, 63500, 98688, 50638,
  39320, 85601, 86749, 84452, 40346, 56693, 96450, 46319, 88183, 47057, 99066,
  95736, 49970, 76310, 72960, 61234, 20364, 89304, 90141, 11708, 67064, 51923,
  47055, 45990, 89727, 92801, 39807, 72390, 16446, 77863, 42686, 28678, 84858,
  64404, 77138, 48368, 89589, 92469, 66906, 96794, 98997, 32791, 86217, 23368,
  88661, 72933, 22703, 71905, 58050, 29588, 39243, 83527, 15249, 77033, 47552,
  57262, 20061, 81279, 58632, 13683, 21964, 95224, 83465, 81225, 16585, 15766,
  50261, 82233, 60140, 52750, 20808, 57243, 43252, 60198, 18620, 44051, 15210,
  60005, 66217, 13853, 63803, 35040, 65842, 39316, 87663, 20060, 25890, 16116,
  31571, 43980, 53704, 79055, 57231, 88376, 59541, 92556, 88194, 34727, 16387,
  96730, 65083, 15228, 81423, 87899, 90911, 17159, 50392, 22864, 37528, 21429,
  28265, 46764, 91323, 83391, 74503, 93683, 31047, 53705, 74884, 54241, 45641,
  64783, 36885, 94878, 95560, 61985, 65075, 32813, 36749, 78654, 86690, 70019,
  20641, 77752, 60383, 90352, 24141, 65390, 47054, 39003, 38161, 38171, 84400,
  15341, 39428, 13942, 96936, 93060, 38192, 46944, 10846, 35101, 91104, 13040,
  32161, 97253, 70362, 53579, 32295, 77624, 19453, 11458, 39312, 68109, 63009,
  96761, 42532, 42166, 87613, 69532, 48387, 54987, 20342, 23664, 46174, 72309,
  72157, 28932, 36882, 23261, 99849, 95036, 67696, 58158, 99688, 95937, 67472,
  32262, 39793, 53311, 28411, 53156, 97772, 27795, 25013, 14528, 76358, 46584,
  45091, 78740, 28185, 86150, 12422, 49946, 39558, 12969, 30758, 30625, 29062,
  51088, 88725, 94002, 35800, 43599, 65922, 52159, 96552, 29575, 51418, 39467,
  76259, 52506, 34793, 36089, 25337, 46924, 62992, 62236, 50926, 72595, 53666,
  44374, 44629, 80493, 76680, 96833, 96740, 90400, 41922, 10333, 13789, 79941,
  34855, 87532, 85678, 34735, 27059, 62170, 59542, 44107, 62531, 36662, 36292,
  76115, 39296, 34919, 74948, 50539, 85056, 28116, 39085, 84409, 57138, 72483,
  32395, 95005, 87581, 28602, 34996, 96430, 77226, 93760, 40364, 40141, 68490,
  48192, 68068, 73633, 83619, 81572, 25924, 29554, 19515, 61203, 66108, 34039,
  54877, 38583, 90667, 84938, 46965, 54823, 71321, 19154, 73217, 76105, 39670,
  30004, 21400, 58732, 46185, 35140, 21937, 29766, 97110, 37622, 10481, 89082,
  37941, 14004, 75256, 91586, 70127, 27519, 30742, 40956, 38337, 93338, 17167,
  90586, 77695, 78449, 14007, 44816, 92128, 70434, 46495, 86412, 12915, 31239,
  25873, 18560, 56101, 85775, 36475, 80038, 98826, 41315, 11389, 11947, 26407,
  30869, 87026, 41060, 27239, 50309, 28120, 52772, 50851, 52738, 73374, 29063,
  75283, 91345, 14809, 82519, 92688, 10526, 59702, 35688, 87590, 40206, 36194,
  43336, 26034, 23466, 33234, 17481, 68582, 36038, 33704, 87642, 37947, 17577,
  13994, 70913, 11985, 82269, 83126, 47981, 71785, 38305, 59774, 62970, 21547,
  63443, 74676, 54357, 88456, 80643, 78727, 86551, 31360, 38144, 39925, 18733,
  14557, 68231, 28923, 36731, 16989, 10112, 81269, 46176, 34165, 30496, 33260,
  91319, 80484, 61567, 36103, 45693, 41025, 36802, 21523, 80599, 49397, 74366,
  30292, 20673, 13158, 89970, 70825, 96736, 26698, 94201, 66228, 50623, 63509,
  96572, 34380, 21120, 24159, 59659, 31572, 48375, 12985, 82040, 63252, 31520,
  38262, 41980, 76273, 11812, 28759, 12882, 64935, 26550, 19156, 93914, 43129,
  13090, 98463, 36993, 89249, 12936, 26497, 75288, 79742, 65715, 21544,
];

const entries2 = [
  47731, 36089, 41038, 17481, 70590, 21561, 59542, 99451, 59542, 92078, 79481,
  48782, 35875, 52649, 80601, 47895, 20025, 59542, 30010, 70822, 91109, 87581,
  30538, 17859, 87581, 32262, 73585, 45533, 46131, 36089, 14043, 72085, 22860,
  41397, 35101, 32262, 86581, 14538, 46584, 17500, 37730, 19539, 39467, 12422,
  34255, 29056, 52296, 38171, 70590, 17306, 86581, 13789, 21386, 46519, 87581,
  46584, 24306, 24086, 43234, 38171, 42288, 74556, 77080, 15029, 52214, 63803,
  94609, 36089, 84225, 70822, 55383, 82069, 12422, 37730, 32262, 48368, 54157,
  59542, 74623, 17481, 33260, 74623, 14684, 98708, 34463, 87581, 75839, 84225,
  24108, 37730, 93749, 38470, 94274, 56935, 74556, 22604, 84225, 85999, 62471,
  56000, 71034, 53519, 33260, 32449, 54732, 52775, 76950, 29497, 43136, 38171,
  46131, 70590, 24973, 99579, 77080, 20266, 24315, 38171, 87581, 68978, 51702,
  96515, 46503, 53188, 17481, 21108, 72487, 59542, 39605, 66029, 74556, 33260,
  10112, 66948, 36089, 75862, 89669, 48362, 21312, 46131, 47636, 70590, 38171,
  77034, 65439, 71747, 35101, 82069, 94609, 23592, 36089, 59542, 94321, 84225,
  35101, 25444, 86819, 87899, 70822, 64983, 70590, 57117, 37685, 77080, 73860,
  53020, 78522, 79269, 81747, 66781, 24906, 10112, 41627, 91781, 70822, 43155,
  70822, 65439, 23478, 70590, 16491, 13789, 65439, 30330, 60775, 79848, 37730,
  59542, 95937, 11620, 38171, 51306, 81668, 57117, 69809, 59542, 39467, 46226,
  29434, 84225, 63803, 39467, 47552, 77080, 15405, 68582, 46131, 74556, 57117,
  71830, 20722, 76996, 74803, 35466, 82069, 59148, 79430, 54357, 46131, 39464,
  39122, 36089, 85723, 74556, 87581, 17116, 82069, 82069, 46316, 80192, 68313,
  97650, 23939, 82069, 82069, 71782, 88309, 86581, 97892, 30492, 70822, 86581,
  70590, 56848, 63379, 92078, 12422, 47552, 59542, 12422, 37081, 27009, 82069,
  74623, 29970, 90710, 68582, 68252, 13782, 71633, 57117, 65439, 46584, 91050,
  98835, 76392, 75035, 36089, 20455, 84225, 87581, 11659, 47973, 16506, 59542,
  75791, 98835, 82248, 54948, 92078, 36089, 27174, 87581, 89264, 59542, 81999,
  33278, 59558, 74906, 70822, 13789, 68582, 53300, 51202, 55687, 71074, 15554,
  39467, 87899, 16810, 33571, 39467, 66766, 98826, 55086, 87581, 53175, 82069,
  36089, 77080, 48368, 29182, 37730, 83226, 12203, 71010, 98679, 48368, 86581,
  32262, 94854, 22046, 48368, 42878, 38171, 77080, 36148, 92078, 36258, 10112,
  10112, 98492, 57390, 95937, 27278, 75494, 59542, 73875, 38171, 46131, 13789,
  28323, 28056, 27589, 37730, 82409, 63235, 53590, 86492, 56569, 10767, 74623,
  26540, 46584, 32262, 65461, 47552, 91242, 77080, 87581, 42348, 46584, 37730,
  70590, 18162, 63803, 70822, 30652, 46131, 32262, 36453, 71111, 39798, 35101,
  91852, 46238, 69190, 61021, 13789, 54357, 39467, 42483, 87581, 24664, 87581,
  45839, 92078, 38899, 94609, 38051, 20519, 10112, 87899, 10112, 82448, 59975,
  86581, 72343, 16516, 47552, 84658, 62180, 91848, 18222, 30134, 63803, 74511,
  53502, 33260, 66275, 10112, 80233, 94470, 57117, 30540, 32898, 16045, 46131,
  70590, 77500, 35083, 65439, 77080, 16597, 54357, 63199, 65439, 57117, 83055,
  32262, 67705, 65439, 36878, 12422, 56000, 87764, 88026, 44649, 84939, 69714,
  92078, 19328, 10112, 66182, 16506, 94609, 17677, 87581, 31253, 16585, 82069,
  48368, 30383, 87581, 12422, 47552, 32262, 37730, 95189, 61725, 74180, 94609,
  86581, 57117, 38551, 95937, 71378, 12497, 96497, 68499, 36028, 74761, 54357,
  12422, 24635, 68582, 28102, 12960, 82069, 93943, 52810, 34777, 82069, 65439,
  98694, 87567, 67336, 59542, 30492, 43518, 92078, 72101, 81573, 24885, 69244,
  13789, 52637, 56318, 46131, 30492, 55403, 94609, 65439, 94609, 39467, 92199,
  70822, 59306, 72864, 38116, 30492, 12422, 82069, 86597, 10112, 59022, 79436,
  65334, 86581, 42455, 70224, 28694, 59542, 67968, 54357, 48368, 65120, 26550,
  80446, 48368, 60658, 36856, 95439, 78334, 74556, 23585, 35242, 74623, 39467,
  57117, 48368, 63803, 24596, 33260, 59543, 10429, 50421, 63450, 56000, 65734,
  95937, 77187, 86581, 21713, 33798, 70590, 82069, 11734, 88748, 10112, 71970,
  36089, 28498, 87581, 71911, 46584, 35136, 62868, 56000, 13789, 75289, 67442,
  84225, 70822, 33260, 10112, 43286, 19599, 74623, 15262, 74556, 36089, 31640,
  19276, 85540, 30492, 65439, 40461, 95734, 55933, 17481, 58026, 47662, 86581,
  69752, 18772, 43751, 70157, 94609, 74556, 59604, 88283, 36089, 17481, 15653,
  57292, 54937, 94609, 31767, 56000, 92469, 32262, 86581, 55678, 50219, 39162,
  36089, 74556, 70822, 70822, 65079, 38038, 20720, 65984, 68582, 48796, 82639,
  70822, 84152, 11951, 42179, 22127, 85408, 95959, 53432, 16317, 30904, 57117,
  10644, 36089, 16506, 59542, 17481, 85798, 83599, 77080, 43286, 94609, 59542,
  46877, 37608, 65439, 35269, 39369, 63803, 38528, 33260, 86581, 99733, 73338,
  94609, 76835, 70590, 21274, 67119, 74623, 86204, 72304, 50542, 74556, 32262,
  60329, 57117, 20123, 74623, 71761, 10350, 38708, 57915, 92078, 32262, 10112,
  70822, 16506, 13789, 70483, 50175, 67104, 64882, 12422, 35801, 20720, 13789,
  31456, 86581, 70590, 26550, 56680, 74556, 38171, 82069, 94596, 81118, 59542,
  33260, 96201, 87800, 44967, 34024, 83207, 28919, 84225, 56000, 10112, 12474,
  73250, 14632, 84225, 38171, 41962, 44159, 12422, 12422, 84696, 56267, 28880,
  78595, 31505, 87581, 51506, 88986, 95152, 70590, 30223, 72611, 11601, 32226,
  53888, 82069, 56000, 33260, 13789, 36089, 91418, 78072, 23674, 72335, 46065,
  61952, 61869, 74556, 29768, 95937, 82638, 91936, 48368, 38995, 82069, 36420,
  15058, 24873, 68305, 94116, 69496, 86581, 82069, 95937, 25384, 74556, 67031,
  15724, 51188, 95937, 59202, 95937, 86581, 65439, 10112, 23762, 94609, 85091,
  55865, 37140, 46584, 74556, 28517, 92078, 84972, 46131, 86581, 56000, 59542,
  57037, 41740, 10743, 86439, 59294, 31471, 65439, 38176, 95937, 46131, 57117,
  72441, 74883, 51660, 28664, 46131, 56339, 70822, 10112, 94609, 39467, 40042,
  93216, 70590, 15355, 47552, 73873, 70822, 63803, 26687, 65439, 77080, 33260,
  35542, 96489, 42450, 10487, 59542, 74069, 73685, 57117, 30492, 13647, 12422,
  64951, 16931, 46131, 57117, 97447, 32262, 37730, 17481, 70822, 46131, 37730,
  74556, 13789, 31754, 98835, 84728, 76800, 29667, 72181, 85286, 32262, 48368,
  87581, 72650, 10112, 92469, 56000, 12422, 89508, 17481, 57117, 29947, 98835,
  62842, 54357, 27741, 70590, 51980, 10112, 30492, 82816, 82624, 75881, 10112,
  41026, 44676, 77177, 32212, 47552, 35101, 87899, 13789, 67642, 61276, 83110,
  77080, 33260, 19229, 27777, 65439, 48368, 92469, 48965, 24828, 75331, 74556,
  12746, 29117, 47552, 19772, 11383, 54357, 20809, 98835, 46131, 38171, 54357,
  48368, 45734, 23504, 84225, 70590, 50609, 10112, 87857, 78056, 82069, 84225,
  87640, 92894, 35752, 38171, 40334, 73557, 13789, 70822, 12422, 26550, 67964,
  23598, 70590, 37251, 36089, 57160, 90976, 32323, 11467, 74556, 32262, 70590,
  45070, 38171, 48368, 70590, 70590, 43757, 65596, 98958, 32262, 92078, 65439,
  94948, 10112, 46131, 26550, 12276, 32750, 17481, 26049, 18185, 91018, 70822,
  46131, 46715, 17481, 56000, 74556, 53951, 82069, 36089, 10557, 57117, 86581,
  13789, 40901, 47552, 46131, 77080, 92653, 33260, 83813, 58394, 35101, 96976,
  57117, 76524, 46131, 35207, 18458, 56000, 35237, 82354, 12422, 29737,
];

const sortedEntries1 = entries1.sort((a, b) => a - b);
const sortedEntries2 = entries2.sort((a, b) => a - b);

let res = 0;

for (let i = 0; i < sortedEntries1.length; i++) {
  res += Math.abs(sortedEntries1[i] - sortedEntries2[i]);
}

console.log(res);