var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-1",
  "level": "1",
  "url": "frontmatter-1.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "   Steven Clontz  University of South Alabama      These are course notes for an introductory undergraduate or dual-listed course for general topology, to be used in an inquiry-based learning classroom.    The first draft of these notes were adapted from Michel Smith 's undergraduate topology notes, used with permission.  Copyright 2022 Steven Clontz. Available for use under the terms of CC BY 4.0 .  Clontz's website is .    These notes have been written to serve as an introduction to topology for undergraduate or beginning graduate students of mathematics. Unlike a more comprehensive textbook, these notes are written to be used in an inquiry-based learning classroom. As such, no proofs have been provided. Instead, the results of the course have been carefully scaffolded to allow students to prove most of the theorems on their own, with the support of the instructor.  The only prerequisite for this course is an undergraduate-level introduction to proofs course, which should include all the naive set theory necessary to study topology at the introductory level. provides a few definitions and theorems that should be assumed for this course (e.g. properties of the reals, ).   "
},
{
  "id": "section-surfaces",
  "level": "1",
  "url": "section-surfaces.html",
  "type": "Preface",
  "number": "",
  "title": "Motivation: Curves and Surfaces",
  "body": " Motivation: Curves and Surfaces   In this section, we will develop an intuition for a topological space and the purpose of topology by investigating two natural examples of topological spaces: curves and surfaces.  Unlike the rest of these notes, we will not rigorously define these concepts. (For example, what do I mean by locally looks like in ?) However, many of these ideas will return later in the course and be handled more carefully.    A curve is a set of points such that for every point in the set, the set locally looks like a (possibly bent or curved) copy of the real line or the half line .   For example, , , and are all examples of curves in two or three-dimensional Euclidean space.   A circle    A parabola    A helix   Note the following differences between and :   Removing a point from would split it into two disconnected parts, but would remain connected after a point is removed.   is bounded while extends unboundedly. This topological distinction makes sense as both are closed subsets of ; see for more info.    These differences would remain no matter how the curves were stretched or bent. However, while there are certainly geometrical differences beteween and , they are in a certain sense the same object that has been bent or stretched into a different shape.   Two objects are said to be topologically equivalent or homeomorphic if one may be bent or stretched into the shape of the other.   So this means that all geometrically similar shapes are homeomorphic (as in ), but we also use the idea of homeomorphism to compare other objects in our daily lives.  For example, while many of them are not curves by our definition, the letters of the alphabet may be considered as topological objects. illustrates several homeomorphic expressions of the letter A .   Two similar triangles    The letter A in several fonts.    A homeomorphism is more carefully defined in , but the central idea is that of neighborhoods . For each of the letters A in , note that there are two endpoints and two triad intersections whose neighborhoods look different from the other neighborhoods within the letter; see .   Neighborhoods within the letter A .     A surface is a set of points such that for every point in the set, the set locally looks like a (possibly bent or curved) copy of the plane or the half-plane .   A classic example of the topology of surfaces is the following joke: A topologist is a mathematician who cannot tell the difference between his doughnut and coffee cup. The joke is a lot funnier Eh, maybe. once you've seen this animated GIF on Wikipedia .  The doughnut 's surface is known mathematically as a torus , shown in . A sphere is shown in , and a surface that cannot be cannot be embedded in , the Klein bottle, is shown in .   A torus.     A sphere.     A Klein bottle.    While these shapes appear very different, they can all be defined as a quotient space ( ) of the unit square in .  In order to study so-called topological spaces such as these, we will begin by distilling down the notion of a neighborhood for an arbitrary set.  "
},
{
  "id": "curve-defn",
  "level": "2",
  "url": "section-surfaces.html#curve-defn",
  "type": "Definition",
  "number": "0.1",
  "title": "",
  "body": " A curve is a set of points such that for every point in the set, the set locally looks like a (possibly bent or curved) copy of the real line or the half line .  "
},
{
  "id": "circle-fig",
  "level": "2",
  "url": "section-surfaces.html#circle-fig",
  "type": "Figure",
  "number": "0.2",
  "title": "",
  "body": " A circle  "
},
{
  "id": "figure-parabola",
  "level": "2",
  "url": "section-surfaces.html#figure-parabola",
  "type": "Figure",
  "number": "0.3",
  "title": "",
  "body": " A parabola  "
},
{
  "id": "figure-helix",
  "level": "2",
  "url": "section-surfaces.html#figure-helix",
  "type": "Figure",
  "number": "0.4",
  "title": "",
  "body": " A helix  "
},
{
  "id": "definition-2",
  "level": "2",
  "url": "section-surfaces.html#definition-2",
  "type": "Definition",
  "number": "0.5",
  "title": "",
  "body": " Two objects are said to be topologically equivalent or homeomorphic if one may be bent or stretched into the shape of the other.  "
},
{
  "id": "figure-similar-triangles",
  "level": "2",
  "url": "section-surfaces.html#figure-similar-triangles",
  "type": "Figure",
  "number": "0.6",
  "title": "",
  "body": " Two similar triangles  "
},
{
  "id": "figure-letter-a",
  "level": "2",
  "url": "section-surfaces.html#figure-letter-a",
  "type": "Figure",
  "number": "0.7",
  "title": "",
  "body": " The letter A in several fonts.   "
},
{
  "id": "figure-letter-a-neighborhoods",
  "level": "2",
  "url": "section-surfaces.html#figure-letter-a-neighborhoods",
  "type": "Figure",
  "number": "0.8",
  "title": "",
  "body": " Neighborhoods within the letter A .   "
},
{
  "id": "definition-surface",
  "level": "2",
  "url": "section-surfaces.html#definition-surface",
  "type": "Definition",
  "number": "0.9",
  "title": "",
  "body": " A surface is a set of points such that for every point in the set, the set locally looks like a (possibly bent or curved) copy of the plane or the half-plane .  "
},
{
  "id": "figure-torus",
  "level": "2",
  "url": "section-surfaces.html#figure-torus",
  "type": "Figure",
  "number": "0.10",
  "title": "",
  "body": " A torus.   "
},
{
  "id": "figure-sphere",
  "level": "2",
  "url": "section-surfaces.html#figure-sphere",
  "type": "Figure",
  "number": "0.11",
  "title": "",
  "body": " A sphere.   "
},
{
  "id": "figure-klein-bottle",
  "level": "2",
  "url": "section-surfaces.html#figure-klein-bottle",
  "type": "Figure",
  "number": "0.12",
  "title": "",
  "body": " A Klein bottle.   "
},
{
  "id": "section-topological-spaces",
  "level": "1",
  "url": "section-topological-spaces.html",
  "type": "Section",
  "number": "1",
  "title": "Topological Spaces",
  "body": " Topological Spaces   Let . The Euclidean open interval from to is the set     Let and . The point is a Euclidean limit point of the set if and only if for every Euclidean open interval containing , there is a point such that and .    Determine if each set has the number as a limit point.  Any finite set   A subset is called Euclidean open if and only if for every point , there exists a Euclidean open interval such that .   Determine if each set is Euclidean open or not Euclidean open.        A finite set    A subset is Euclidean open if and only if there exists a collection of Euclidean open intervals such that .    Let and . The point is a limit point of the set if and only if for every Euclidean open set containing , there is a point such that and .    The Euclidean open subsets of satisfy the following properties.    and are Euclidean open sets.  If is a collection of Euclidean open sets, then is also a Euclidean open set.  If are Euclidean open sets, then is also a Euclidean open set.     Let be a set, and let satisfy the following properties.    .  If , then .  If , then .   Then is called a topology on , the pair is called a topological space , and elements are called open sets of the space. (Usually is abbreviated to just when the topology is known from context.)    Let be the collection of Euclidean open subsets of defined by . Then by , is a valid topology for called the Euclidean topology .    Let be any set. Then the following sets are topologies on .   is called the discrete topology .  is called the indiscrete topology .      Let be a topology, and let be finite. Then .    Let be the Euclidean topology. There exists a collection such that .    Let . The following are called intervals of real numbers.       Show that each of the following is an example of a topological space .  Let and .  Let and .  Let and if for each , there exists such that .  Let and .  Let , , , and .    Let be a topological space and let . The set is called a neighborhood of if and only if there exists an open set such that .    A subset of a topological space is open if and only if is a neighborhood of every point it contains.    Let be a subset of a topological space. The point is a limit point of the set if and only if for every neighborhood of of , there is a point such that and .    The point is a limit point of with the Euclidean topology according to if and only if it is a Euclidean limit point according to .    Let be a subset of a topological space. Then is the set of all limit points of , called the derived set of .    Let be a subset of a topological space. Then is called the closure of .   Calculate for each of the following examples.  where has the Euclidean topology.  where has the discrete topology.  where has the indiscrete topology.  where has the Euclidean topology.  where has the Euclidean topology.    Let be a subset of a topological space. Then is called closed if and only if .    Let be a subset of a topological space. Then is closed if and only if the set is open.    The closed subsets of a topological space satisfy the following properties.    and are closed sets.  If is a collection of closed sets, then is also a closed set.  If are closed sets, then is a closed set.     (This space intentionally left blank to not mess up numbering. TODO: delete this after fall 2022.)    Let be a subset of a topological space. The point is a boundary point of the set if and only if for every neighborhood of of , both and are non-empty.  Let collect all the boundary points of .    Let . Then with respect to the Eudlidean topology.    Let be a subset of a topological space. The point is a interior point of the set if and only if there exists a neighborhood of such that .  Let collect all the interior points of .    Let be a subset of a topological space. Then is open if and only if .    Let be a subset of a topological space. The point is a exterior point of the set if and only if there exists a neighborhood of such that .  Let collect all the exterior points of .    A partition of a set is a collection such that and for all where .    Let be a subset of a topological space. Then is a partition of .    Let be a subset of a topological space. Then .   Let be a subset of a topological space . Prove or disprove the following.          Let be subsets of a topological space . Prove or disprove the following.          Let for a topological space . Then the subspace topology for is given by .    The subspace topology is a valid topology.    The Cantor set is the subset defined by , where and This set is usually considered as a closed subset of the Euclidean line, or as a subspace of the Euclidean line.    The interior of the Cantor Set is empty.    The Cantor Set is uncountable.   "
},
{
  "id": "definition-4",
  "level": "2",
  "url": "section-topological-spaces.html#definition-4",
  "type": "Definition",
  "number": "1.1",
  "title": "",
  "body": " Let . The Euclidean open interval from to is the set   "
},
{
  "id": "limit-point-intro",
  "level": "2",
  "url": "section-topological-spaces.html#limit-point-intro",
  "type": "Definition",
  "number": "1.2",
  "title": "",
  "body": " Let and . The point is a Euclidean limit point of the set if and only if for every Euclidean open interval containing , there is a point such that and .  "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "section-topological-spaces.html#exercise-1",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": " Determine if each set has the number as a limit point.  Any finite set "
},
{
  "id": "euclidean-open-sets",
  "level": "2",
  "url": "section-topological-spaces.html#euclidean-open-sets",
  "type": "Definition",
  "number": "1.4",
  "title": "",
  "body": " A subset is called Euclidean open if and only if for every point , there exists a Euclidean open interval such that .  "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "section-topological-spaces.html#exercise-2",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "Determine if each set is Euclidean open or not Euclidean open.        A finite set  "
},
{
  "id": "theorem-1",
  "level": "2",
  "url": "section-topological-spaces.html#theorem-1",
  "type": "Theorem",
  "number": "1.6",
  "title": "",
  "body": " A subset is Euclidean open if and only if there exists a collection of Euclidean open intervals such that .  "
},
{
  "id": "proposition-1",
  "level": "2",
  "url": "section-topological-spaces.html#proposition-1",
  "type": "Proposition",
  "number": "1.7",
  "title": "",
  "body": " Let and . The point is a limit point of the set if and only if for every Euclidean open set containing , there is a point such that and .  "
},
{
  "id": "euclidean-topology-verification",
  "level": "2",
  "url": "section-topological-spaces.html#euclidean-topology-verification",
  "type": "Theorem",
  "number": "1.8",
  "title": "",
  "body": " The Euclidean open subsets of satisfy the following properties.    and are Euclidean open sets.  If is a collection of Euclidean open sets, then is also a Euclidean open set.  If are Euclidean open sets, then is also a Euclidean open set.   "
},
{
  "id": "definition-7",
  "level": "2",
  "url": "section-topological-spaces.html#definition-7",
  "type": "Definition",
  "number": "1.9",
  "title": "",
  "body": " Let be a set, and let satisfy the following properties.    .  If , then .  If , then .   Then is called a topology on , the pair is called a topological space , and elements are called open sets of the space. (Usually is abbreviated to just when the topology is known from context.)  "
},
{
  "id": "definition-8",
  "level": "2",
  "url": "section-topological-spaces.html#definition-8",
  "type": "Definition",
  "number": "1.10",
  "title": "",
  "body": " Let be the collection of Euclidean open subsets of defined by . Then by , is a valid topology for called the Euclidean topology .  "
},
{
  "id": "theorem-3",
  "level": "2",
  "url": "section-topological-spaces.html#theorem-3",
  "type": "Theorem",
  "number": "1.11",
  "title": "",
  "body": " Let be any set. Then the following sets are topologies on .   is called the discrete topology .  is called the indiscrete topology .   "
},
{
  "id": "proposition-2",
  "level": "2",
  "url": "section-topological-spaces.html#proposition-2",
  "type": "Proposition",
  "number": "1.12",
  "title": "",
  "body": " Let be a topology, and let be finite. Then .  "
},
{
  "id": "proposition-3",
  "level": "2",
  "url": "section-topological-spaces.html#proposition-3",
  "type": "Proposition",
  "number": "1.13",
  "title": "",
  "body": " Let be the Euclidean topology. There exists a collection such that .  "
},
{
  "id": "definition-9",
  "level": "2",
  "url": "section-topological-spaces.html#definition-9",
  "type": "Definition",
  "number": "1.14",
  "title": "",
  "body": " Let . The following are called intervals of real numbers.      "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "section-topological-spaces.html#exercise-3",
  "type": "Checkpoint",
  "number": "1.15",
  "title": "",
  "body": "Show that each of the following is an example of a topological space .  Let and .  Let and .  Let and if for each , there exists such that .  Let and .  Let , , , and .  "
},
{
  "id": "definition-10",
  "level": "2",
  "url": "section-topological-spaces.html#definition-10",
  "type": "Definition",
  "number": "1.16",
  "title": "",
  "body": " Let be a topological space and let . The set is called a neighborhood of if and only if there exists an open set such that .  "
},
{
  "id": "proposition-4",
  "level": "2",
  "url": "section-topological-spaces.html#proposition-4",
  "type": "Proposition",
  "number": "1.17",
  "title": "",
  "body": " A subset of a topological space is open if and only if is a neighborhood of every point it contains.  "
},
{
  "id": "limit-point",
  "level": "2",
  "url": "section-topological-spaces.html#limit-point",
  "type": "Definition",
  "number": "1.18",
  "title": "",
  "body": " Let be a subset of a topological space. The point is a limit point of the set if and only if for every neighborhood of of , there is a point such that and .  "
},
{
  "id": "proposition-5",
  "level": "2",
  "url": "section-topological-spaces.html#proposition-5",
  "type": "Proposition",
  "number": "1.19",
  "title": "",
  "body": " The point is a limit point of with the Euclidean topology according to if and only if it is a Euclidean limit point according to .  "
},
{
  "id": "definition-12",
  "level": "2",
  "url": "section-topological-spaces.html#definition-12",
  "type": "Definition",
  "number": "1.20",
  "title": "",
  "body": " Let be a subset of a topological space. Then is the set of all limit points of , called the derived set of .  "
},
{
  "id": "definition-13",
  "level": "2",
  "url": "section-topological-spaces.html#definition-13",
  "type": "Definition",
  "number": "1.21",
  "title": "",
  "body": " Let be a subset of a topological space. Then is called the closure of .  "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "section-topological-spaces.html#exercise-4",
  "type": "Checkpoint",
  "number": "1.22",
  "title": "",
  "body": "Calculate for each of the following examples.  where has the Euclidean topology.  where has the discrete topology.  where has the indiscrete topology.  where has the Euclidean topology.  where has the Euclidean topology.  "
},
{
  "id": "definition-14",
  "level": "2",
  "url": "section-topological-spaces.html#definition-14",
  "type": "Definition",
  "number": "1.23",
  "title": "",
  "body": " Let be a subset of a topological space. Then is called closed if and only if .  "
},
{
  "id": "theorem-4",
  "level": "2",
  "url": "section-topological-spaces.html#theorem-4",
  "type": "Theorem",
  "number": "1.24",
  "title": "",
  "body": " Let be a subset of a topological space. Then is closed if and only if the set is open.  "
},
{
  "id": "proposition-6",
  "level": "2",
  "url": "section-topological-spaces.html#proposition-6",
  "type": "Proposition",
  "number": "1.25",
  "title": "",
  "body": " The closed subsets of a topological space satisfy the following properties.    and are closed sets.  If is a collection of closed sets, then is also a closed set.  If are closed sets, then is a closed set.   "
},
{
  "id": "theorem-5",
  "level": "2",
  "url": "section-topological-spaces.html#theorem-5",
  "type": "Theorem",
  "number": "1.26",
  "title": "",
  "body": " (This space intentionally left blank to not mess up numbering. TODO: delete this after fall 2022.)  "
},
{
  "id": "boundary-point",
  "level": "2",
  "url": "section-topological-spaces.html#boundary-point",
  "type": "Definition",
  "number": "1.27",
  "title": "",
  "body": " Let be a subset of a topological space. The point is a boundary point of the set if and only if for every neighborhood of of , both and are non-empty.  Let collect all the boundary points of .  "
},
{
  "id": "proposition-7",
  "level": "2",
  "url": "section-topological-spaces.html#proposition-7",
  "type": "Proposition",
  "number": "1.28",
  "title": "",
  "body": " Let . Then with respect to the Eudlidean topology.  "
},
{
  "id": "interior-point",
  "level": "2",
  "url": "section-topological-spaces.html#interior-point",
  "type": "Definition",
  "number": "1.29",
  "title": "",
  "body": " Let be a subset of a topological space. The point is a interior point of the set if and only if there exists a neighborhood of such that .  Let collect all the interior points of .  "
},
{
  "id": "proposition-8",
  "level": "2",
  "url": "section-topological-spaces.html#proposition-8",
  "type": "Proposition",
  "number": "1.30",
  "title": "",
  "body": " Let be a subset of a topological space. Then is open if and only if .  "
},
{
  "id": "exterior-point",
  "level": "2",
  "url": "section-topological-spaces.html#exterior-point",
  "type": "Definition",
  "number": "1.31",
  "title": "",
  "body": " Let be a subset of a topological space. The point is a exterior point of the set if and only if there exists a neighborhood of such that .  Let collect all the exterior points of .  "
},
{
  "id": "definition-18",
  "level": "2",
  "url": "section-topological-spaces.html#definition-18",
  "type": "Definition",
  "number": "1.32",
  "title": "",
  "body": " A partition of a set is a collection such that and for all where .  "
},
{
  "id": "proposition-9",
  "level": "2",
  "url": "section-topological-spaces.html#proposition-9",
  "type": "Proposition",
  "number": "1.33",
  "title": "",
  "body": " Let be a subset of a topological space. Then is a partition of .  "
},
{
  "id": "proposition-10",
  "level": "2",
  "url": "section-topological-spaces.html#proposition-10",
  "type": "Proposition",
  "number": "1.34",
  "title": "",
  "body": " Let be a subset of a topological space. Then .  "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "section-topological-spaces.html#exercise-5",
  "type": "Checkpoint",
  "number": "1.35",
  "title": "",
  "body": "Let be a subset of a topological space . Prove or disprove the following.         "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "section-topological-spaces.html#exercise-6",
  "type": "Checkpoint",
  "number": "1.36",
  "title": "",
  "body": "Let be subsets of a topological space . Prove or disprove the following.        "
},
{
  "id": "definition-19",
  "level": "2",
  "url": "section-topological-spaces.html#definition-19",
  "type": "Definition",
  "number": "1.37",
  "title": "",
  "body": " Let for a topological space . Then the subspace topology for is given by .  "
},
{
  "id": "proposition-11",
  "level": "2",
  "url": "section-topological-spaces.html#proposition-11",
  "type": "Proposition",
  "number": "1.38",
  "title": "",
  "body": " The subspace topology is a valid topology.  "
},
{
  "id": "definition-20",
  "level": "2",
  "url": "section-topological-spaces.html#definition-20",
  "type": "Definition",
  "number": "1.39",
  "title": "",
  "body": " The Cantor set is the subset defined by , where and This set is usually considered as a closed subset of the Euclidean line, or as a subspace of the Euclidean line.  "
},
{
  "id": "theorem-6",
  "level": "2",
  "url": "section-topological-spaces.html#theorem-6",
  "type": "Theorem",
  "number": "1.40",
  "title": "",
  "body": " The interior of the Cantor Set is empty.  "
},
{
  "id": "theorem-7",
  "level": "2",
  "url": "section-topological-spaces.html#theorem-7",
  "type": "Theorem",
  "number": "1.41",
  "title": "",
  "body": " The Cantor Set is uncountable.  "
},
{
  "id": "section-basis-density",
  "level": "1",
  "url": "section-basis-density.html",
  "type": "Section",
  "number": "2",
  "title": "Basis, Density, and Size",
  "body": " Basis, Density, and Size   Let be a topological space. A subset is called a basis for the topology if for every and neighborhood of , there exists such that .     is a basis for the Euclidean topology.    Let satisfy the following properties:   For all , there exists such that .  If and , there exists such that .   Then is a topology, and is a basis for that topology. We call this the topology generated by the basis .     is a basis for a topology different from the Euclidean topology, called the Sorgenfrey topology .   Examples of bases Calculate the topology generated by each basis on .         Two bases generate the same topology if and only if for all there exists such that , and for all there exists such that .     Let and Then is a topology.    The set in is called a subbasis generating the topology    Topologies generated from subbases Calculate the topology on generated by each subbasis.        Let and Then is a basis for a topology on , and the topology generated by the basis is same as the topology generated by the subbasis .     A subset of a topological space is called dense if and only if .   Determine which of these are dense subsets of .        A subset of a topological space is dense if and only if every nonempty open set of the space contains a point of .    Let be a topological space, and let . If is dense, then is also dense.    A space is said to have countable weight (or be second-countable ) if it has a basis whose cardinality is countable.    A space is said to have countable density (or be separable , no relation to ) if it has a dense subset whose cardinality is countable.    There exists a space with countable cardinality, but uncountable weight.    The reals with the Euclidean topology are a space with uncountable cardinality, but countable weight and countable density.    Every space with countable weight has countable density.    The reals with the Sorgenfrey topology are a space with uncountable cardinality and weight, but countable density.    The reals with the discrete topology are a space with uncountable cardinality, weight, and density.   Find or define a non-discrete topological space which has uncountable weight and density.   Let be a basis for and . Then is a basis for the subspace topology on .   "
},
{
  "id": "definition-21",
  "level": "2",
  "url": "section-basis-density.html#definition-21",
  "type": "Definition",
  "number": "2.1",
  "title": "",
  "body": " Let be a topological space. A subset is called a basis for the topology if for every and neighborhood of , there exists such that .  "
},
{
  "id": "proposition-12",
  "level": "2",
  "url": "section-basis-density.html#proposition-12",
  "type": "Proposition",
  "number": "2.2",
  "title": "",
  "body": "  is a basis for the Euclidean topology.  "
},
{
  "id": "theorem-8",
  "level": "2",
  "url": "section-basis-density.html#theorem-8",
  "type": "Theorem",
  "number": "2.3",
  "title": "",
  "body": " Let satisfy the following properties:   For all , there exists such that .  If and , there exists such that .   Then is a topology, and is a basis for that topology. We call this the topology generated by the basis .  "
},
{
  "id": "proposition-13",
  "level": "2",
  "url": "section-basis-density.html#proposition-13",
  "type": "Proposition",
  "number": "2.4",
  "title": "",
  "body": "  is a basis for a topology different from the Euclidean topology, called the Sorgenfrey topology .  "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "section-basis-density.html#exercise-7",
  "type": "Checkpoint",
  "number": "2.5",
  "title": "Examples of bases.",
  "body": "Examples of bases Calculate the topology generated by each basis on .       "
},
{
  "id": "theorem-9",
  "level": "2",
  "url": "section-basis-density.html#theorem-9",
  "type": "Theorem",
  "number": "2.6",
  "title": "",
  "body": " Two bases generate the same topology if and only if for all there exists such that , and for all there exists such that .  "
},
{
  "id": "subbasis",
  "level": "2",
  "url": "section-basis-density.html#subbasis",
  "type": "Theorem",
  "number": "2.7",
  "title": "",
  "body": " Let and Then is a topology.  "
},
{
  "id": "definition-22",
  "level": "2",
  "url": "section-basis-density.html#definition-22",
  "type": "Definition",
  "number": "2.8",
  "title": "",
  "body": " The set in is called a subbasis generating the topology   "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "section-basis-density.html#exercise-8",
  "type": "Checkpoint",
  "number": "2.9",
  "title": "Topologies generated from subbases.",
  "body": "Topologies generated from subbases Calculate the topology on generated by each subbasis.      "
},
{
  "id": "theorem-11",
  "level": "2",
  "url": "section-basis-density.html#theorem-11",
  "type": "Theorem",
  "number": "2.10",
  "title": "",
  "body": " Let and Then is a basis for a topology on , and the topology generated by the basis is same as the topology generated by the subbasis .  "
},
{
  "id": "definition-23",
  "level": "2",
  "url": "section-basis-density.html#definition-23",
  "type": "Definition",
  "number": "2.11",
  "title": "",
  "body": " A subset of a topological space is called dense if and only if .  "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "section-basis-density.html#exercise-9",
  "type": "Checkpoint",
  "number": "2.12",
  "title": "",
  "body": "Determine which of these are dense subsets of .      "
},
{
  "id": "theorem-12",
  "level": "2",
  "url": "section-basis-density.html#theorem-12",
  "type": "Theorem",
  "number": "2.13",
  "title": "",
  "body": " A subset of a topological space is dense if and only if every nonempty open set of the space contains a point of .  "
},
{
  "id": "proposition-14",
  "level": "2",
  "url": "section-basis-density.html#proposition-14",
  "type": "Proposition",
  "number": "2.14",
  "title": "",
  "body": " Let be a topological space, and let . If is dense, then is also dense.  "
},
{
  "id": "definition-24",
  "level": "2",
  "url": "section-basis-density.html#definition-24",
  "type": "Definition",
  "number": "2.15",
  "title": "",
  "body": " A space is said to have countable weight (or be second-countable ) if it has a basis whose cardinality is countable.  "
},
{
  "id": "definition-25",
  "level": "2",
  "url": "section-basis-density.html#definition-25",
  "type": "Definition",
  "number": "2.16",
  "title": "",
  "body": " A space is said to have countable density (or be separable , no relation to ) if it has a dense subset whose cardinality is countable.  "
},
{
  "id": "theorem-13",
  "level": "2",
  "url": "section-basis-density.html#theorem-13",
  "type": "Theorem",
  "number": "2.17",
  "title": "",
  "body": " There exists a space with countable cardinality, but uncountable weight.  "
},
{
  "id": "example-1",
  "level": "2",
  "url": "section-basis-density.html#example-1",
  "type": "Example",
  "number": "2.18",
  "title": "",
  "body": " The reals with the Euclidean topology are a space with uncountable cardinality, but countable weight and countable density.  "
},
{
  "id": "theorem-14",
  "level": "2",
  "url": "section-basis-density.html#theorem-14",
  "type": "Theorem",
  "number": "2.19",
  "title": "",
  "body": " Every space with countable weight has countable density.  "
},
{
  "id": "example-2",
  "level": "2",
  "url": "section-basis-density.html#example-2",
  "type": "Example",
  "number": "2.20",
  "title": "",
  "body": " The reals with the Sorgenfrey topology are a space with uncountable cardinality and weight, but countable density.  "
},
{
  "id": "proposition-15",
  "level": "2",
  "url": "section-basis-density.html#proposition-15",
  "type": "Proposition",
  "number": "2.21",
  "title": "",
  "body": " The reals with the discrete topology are a space with uncountable cardinality, weight, and density.  "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "section-basis-density.html#exercise-10",
  "type": "Checkpoint",
  "number": "2.22",
  "title": "",
  "body": "Find or define a non-discrete topological space which has uncountable weight and density. "
},
{
  "id": "proposition-16",
  "level": "2",
  "url": "section-basis-density.html#proposition-16",
  "type": "Proposition",
  "number": "2.23",
  "title": "",
  "body": " Let be a basis for and . Then is a basis for the subspace topology on .  "
},
{
  "id": "section-continuity",
  "level": "1",
  "url": "section-continuity.html",
  "type": "Section",
  "number": "3",
  "title": "Continuity & Homeomorphisms",
  "body": " Continuity & Homeomorphisms   Let be a function. For , let . For , let . For , let .    Let be topological spaces with , and let be a function such that for every neighborhood of , there exists a neighborhood of such that . Then is said to be continuous at the point  .  A function that is continuous at every point of its domain is called continuous .    A function is continuous if and only if is an open subset of for every open .    Let be topological spaces.   The identity function defined by is continuous.  Let . The constant function defined by is continuous.  Every function whose domain is a discrete space is continuous.  Every function whose range is an indiscrete space is continuous.    Verify that each of the following functions are continuous with respect to the Euclidean topology at each real number where they are defined.    for continuous.  for continuous.     If and are both continuous, then is continuous.    Let be a bijection such that both and its inverse are continuous. Then is called a homeomorphism and are said to be homeomorphic .   Properties preserved by continuous functions Determine if the following hold if is a continous surjection. If not, determine if they hold if is a continuous bijection. If not, show that they hold if is a homeomorphism.   If is open, then is open.  If is closed, then is closed.  If is a limit point of , then is a limit point of .    Every topological space is homeomorphic to itself.    If and are both homeomorphisms, then is a homeomorphism.    Let and be real numbers. Then and are homeomorphic subspaces of the Euclidean line.    Let and have their Euclidean (subspace) topologies. Then the function defined by is a homeomorphism.     Let be a basis for the Euclidean topology on . Give the topology generated by the basis . Then is homeomorphic to the subspace of the Euclidean line.    The real line with the Sorgenfrey topology generated by the basis is homeomorphic to the real line with the reverse Sorgenfrey topology generated by the basis .    A continuous bijection is a homeomorphism if and only if for each open, is also open.    The topology on the real line generated by the basis is equal (not just homeomorphic!) to another topology we've previously defined for .   "
},
{
  "id": "definition-26",
  "level": "2",
  "url": "section-continuity.html#definition-26",
  "type": "Definition",
  "number": "3.1",
  "title": "",
  "body": " Let be a function. For , let . For , let . For , let .  "
},
{
  "id": "definition-27",
  "level": "2",
  "url": "section-continuity.html#definition-27",
  "type": "Definition",
  "number": "3.2",
  "title": "",
  "body": " Let be topological spaces with , and let be a function such that for every neighborhood of , there exists a neighborhood of such that . Then is said to be continuous at the point  .  A function that is continuous at every point of its domain is called continuous .  "
},
{
  "id": "proposition-17",
  "level": "2",
  "url": "section-continuity.html#proposition-17",
  "type": "Proposition",
  "number": "3.3",
  "title": "",
  "body": " A function is continuous if and only if is an open subset of for every open .  "
},
{
  "id": "proposition-18",
  "level": "2",
  "url": "section-continuity.html#proposition-18",
  "type": "Proposition",
  "number": "3.4",
  "title": "",
  "body": " Let be topological spaces.   The identity function defined by is continuous.  Let . The constant function defined by is continuous.  Every function whose domain is a discrete space is continuous.  Every function whose range is an indiscrete space is continuous.   "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "section-continuity.html#exercise-11",
  "type": "Checkpoint",
  "number": "3.5",
  "title": "",
  "body": "Verify that each of the following functions are continuous with respect to the Euclidean topology at each real number where they are defined.    for continuous.  for continuous.   "
},
{
  "id": "theorem-15",
  "level": "2",
  "url": "section-continuity.html#theorem-15",
  "type": "Theorem",
  "number": "3.6",
  "title": "",
  "body": " If and are both continuous, then is continuous.  "
},
{
  "id": "definition-28",
  "level": "2",
  "url": "section-continuity.html#definition-28",
  "type": "Definition",
  "number": "3.7",
  "title": "",
  "body": " Let be a bijection such that both and its inverse are continuous. Then is called a homeomorphism and are said to be homeomorphic .  "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "section-continuity.html#exercise-12",
  "type": "Checkpoint",
  "number": "3.8",
  "title": "Properties preserved by continuous functions.",
  "body": "Properties preserved by continuous functions Determine if the following hold if is a continous surjection. If not, determine if they hold if is a continuous bijection. If not, show that they hold if is a homeomorphism.   If is open, then is open.  If is closed, then is closed.  If is a limit point of , then is a limit point of .  "
},
{
  "id": "proposition-19",
  "level": "2",
  "url": "section-continuity.html#proposition-19",
  "type": "Proposition",
  "number": "3.9",
  "title": "",
  "body": " Every topological space is homeomorphic to itself.  "
},
{
  "id": "proposition-20",
  "level": "2",
  "url": "section-continuity.html#proposition-20",
  "type": "Proposition",
  "number": "3.10",
  "title": "",
  "body": " If and are both homeomorphisms, then is a homeomorphism.  "
},
{
  "id": "theorem-16",
  "level": "2",
  "url": "section-continuity.html#theorem-16",
  "type": "Theorem",
  "number": "3.11",
  "title": "",
  "body": " Let and be real numbers. Then and are homeomorphic subspaces of the Euclidean line.  "
},
{
  "id": "theorem-17",
  "level": "2",
  "url": "section-continuity.html#theorem-17",
  "type": "Theorem",
  "number": "3.12",
  "title": "",
  "body": " Let and have their Euclidean (subspace) topologies. Then the function defined by is a homeomorphism.  "
},
{
  "id": "theorem-18",
  "level": "2",
  "url": "section-continuity.html#theorem-18",
  "type": "Theorem",
  "number": "3.13",
  "title": "",
  "body": " Let be a basis for the Euclidean topology on . Give the topology generated by the basis . Then is homeomorphic to the subspace of the Euclidean line.  "
},
{
  "id": "proposition-21",
  "level": "2",
  "url": "section-continuity.html#proposition-21",
  "type": "Proposition",
  "number": "3.14",
  "title": "",
  "body": " The real line with the Sorgenfrey topology generated by the basis is homeomorphic to the real line with the reverse Sorgenfrey topology generated by the basis .  "
},
{
  "id": "proposition-22",
  "level": "2",
  "url": "section-continuity.html#proposition-22",
  "type": "Proposition",
  "number": "3.15",
  "title": "",
  "body": " A continuous bijection is a homeomorphism if and only if for each open, is also open.  "
},
{
  "id": "example-3",
  "level": "2",
  "url": "section-continuity.html#example-3",
  "type": "Example",
  "number": "3.16",
  "title": "",
  "body": " The topology on the real line generated by the basis is equal (not just homeomorphic!) to another topology we've previously defined for .  "
},
{
  "id": "section-separation",
  "level": "1",
  "url": "section-separation.html",
  "type": "Section",
  "number": "4",
  "title": "Separation",
  "body": " Separation   The following are known as separation axioms for a topological space .    is said to be if and only if for all points such that , there either exists a neighborhood of such that , or there exists a neighborhood of such that .   is said to be if and only if for all points such that , there exists a neighborhood of such that .   is said to be (also known as Hausdorff ) if and only if for all points such that , there exist neighborhoods of (respectively) such that .      .   Find or create an example of a topological space that is:  Not .  but not .  but not .    A topological space is if and only if every finite subset of is closed.    Let be a finite topological space. Then is if and only if has the discrete topology.    The Euclidean real line is an example of a Hausdorff topological space that does not have the discrete topology.    The following are also known as separation axioms for a topological space .    is said to be regular if and only if for all points and closed subsets such that , there exist open sets such that .   is said to be if and only if it is both regular and    is said to be normal if and only if for all closed subsets such that , there exist open sets such that .   is said to be if and only if it is both normal and       for .    The real line equipped with the Euclidean topology is .  (Note: in fact it is , but we will delay until the next chapter to see this.) Find or create an example of a topological space that is:  but not regular.  but not  Regular but not .  Normal but not .  Regular but not normal.  Normal but not regular.    A space is regular if and only if for every point and neighborhood , there exists a neighborhood of such that .    A space is normal if and only if for closed set and open set , there exists an open set such that .    A topological space is if and only if it is regular and .    Let . A subspace of a space is also .    Let and be continuous. If is , then is also .    Let and be a continuous closed map. If is , then is also .    Separation properties are topological properties (that is, preserved by homeomorphism).   "
},
{
  "id": "definition-29",
  "level": "2",
  "url": "section-separation.html#definition-29",
  "type": "Definition",
  "number": "4.1",
  "title": "",
  "body": " The following are known as separation axioms for a topological space .    is said to be if and only if for all points such that , there either exists a neighborhood of such that , or there exists a neighborhood of such that .   is said to be if and only if for all points such that , there exists a neighborhood of such that .   is said to be (also known as Hausdorff ) if and only if for all points such that , there exist neighborhoods of (respectively) such that .   "
},
{
  "id": "proposition-23",
  "level": "2",
  "url": "section-separation.html#proposition-23",
  "type": "Proposition",
  "number": "4.2",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "section-separation.html#exercise-13",
  "type": "Checkpoint",
  "number": "4.3",
  "title": "",
  "body": "Find or create an example of a topological space that is:  Not .  but not .  but not .  "
},
{
  "id": "theorem-19",
  "level": "2",
  "url": "section-separation.html#theorem-19",
  "type": "Theorem",
  "number": "4.4",
  "title": "",
  "body": " A topological space is if and only if every finite subset of is closed.  "
},
{
  "id": "corollary-1",
  "level": "2",
  "url": "section-separation.html#corollary-1",
  "type": "Corollary",
  "number": "4.5",
  "title": "",
  "body": " Let be a finite topological space. Then is if and only if has the discrete topology.  "
},
{
  "id": "proposition-24",
  "level": "2",
  "url": "section-separation.html#proposition-24",
  "type": "Proposition",
  "number": "4.6",
  "title": "",
  "body": " The Euclidean real line is an example of a Hausdorff topological space that does not have the discrete topology.  "
},
{
  "id": "definition-30",
  "level": "2",
  "url": "section-separation.html#definition-30",
  "type": "Definition",
  "number": "4.7",
  "title": "",
  "body": " The following are also known as separation axioms for a topological space .    is said to be regular if and only if for all points and closed subsets such that , there exist open sets such that .   is said to be if and only if it is both regular and    is said to be normal if and only if for all closed subsets such that , there exist open sets such that .   is said to be if and only if it is both normal and    "
},
{
  "id": "proposition-25",
  "level": "2",
  "url": "section-separation.html#proposition-25",
  "type": "Proposition",
  "number": "4.8",
  "title": "",
  "body": "  for .  "
},
{
  "id": "theorem-20",
  "level": "2",
  "url": "section-separation.html#theorem-20",
  "type": "Theorem",
  "number": "4.9",
  "title": "",
  "body": " The real line equipped with the Euclidean topology is .  "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "section-separation.html#exercise-14",
  "type": "Checkpoint",
  "number": "4.10",
  "title": "",
  "body": "Find or create an example of a topological space that is:  but not regular.  but not  Regular but not .  Normal but not .  Regular but not normal.  Normal but not regular.  "
},
{
  "id": "proposition-26",
  "level": "2",
  "url": "section-separation.html#proposition-26",
  "type": "Proposition",
  "number": "4.11",
  "title": "",
  "body": " A space is regular if and only if for every point and neighborhood , there exists a neighborhood of such that .  "
},
{
  "id": "proposition-27",
  "level": "2",
  "url": "section-separation.html#proposition-27",
  "type": "Proposition",
  "number": "4.12",
  "title": "",
  "body": " A space is normal if and only if for closed set and open set , there exists an open set such that .  "
},
{
  "id": "theorem-21",
  "level": "2",
  "url": "section-separation.html#theorem-21",
  "type": "Theorem",
  "number": "4.13",
  "title": "",
  "body": " A topological space is if and only if it is regular and .  "
},
{
  "id": "proposition-28",
  "level": "2",
  "url": "section-separation.html#proposition-28",
  "type": "Proposition",
  "number": "4.14",
  "title": "",
  "body": " Let . A subspace of a space is also .  "
},
{
  "id": "proposition-29",
  "level": "2",
  "url": "section-separation.html#proposition-29",
  "type": "Proposition",
  "number": "4.15",
  "title": "",
  "body": " Let and be continuous. If is , then is also .  "
},
{
  "id": "theorem-22",
  "level": "2",
  "url": "section-separation.html#theorem-22",
  "type": "Theorem",
  "number": "4.16",
  "title": "",
  "body": " Let and be a continuous closed map. If is , then is also .  "
},
{
  "id": "corollary-2",
  "level": "2",
  "url": "section-separation.html#corollary-2",
  "type": "Corollary",
  "number": "4.17",
  "title": "",
  "body": " Separation properties are topological properties (that is, preserved by homeomorphism).  "
},
{
  "id": "section-metric",
  "level": "1",
  "url": "section-metric.html",
  "type": "Section",
  "number": "5",
  "title": "Metric Spaces",
  "body": " Metric Spaces   Let be a function satisfying the following for all .   if and only if .     Then is said to be a metric on the set , and is said to be a metric ball around .   Examples of metrics Verify that each of the following is a metric.  for all distinct , and  for all   for all .   for all .   for all .    Let be a metric on a set . Then is a basis for a topology on .    The topology generated by the basis given in is called the topology generated by the metric .  A given topology is said to be metrizable if there exists some metric that generates it. Two metrics are said to be topologically equivalent if they generate the same topology.    Every discrete space is metrizable.    Every metrizable space is .    Let be the metric balls around given by two metrics respectively. Then are topologically equivalent if and only if for all and , there exists such that and .    For , let .    The following metrics on are topologically equivalent.               The topology generated by the metrics given in is called the Euclidean topology on .    The Euclidean topology defined for in is the same as the Euclidean topology given for in .    A local basis at a point is a collection of open sets such that for every neighborhood of , there exists such that .    A space is said to have local countable weight (or be first-countable ) if there exists a countable local basis at every point of the space.    Every space of countable weight has local countable weight.    Every metrizable space has local countable weight    Let be metrizable. Then has countable weight if and only if it has countable density.    Every space with the Euclidean topology has countable weight and density.   FALL 2022 note: we will not cover the below topics.   For , let if , and otherwise. Then is a metric generating a non-discrete topology on with uncountable weight and uncountable density.    The subspace of the space defined in is homeomorphic to the subspace of the Euclidean line.    A point is called a sequential limit point of a set iff there exists a countable subset such that every neighborhood of contains all but finitely many points of .    Every sequential limit point of a set is a limit point of that set.    Let have local countable weight. Then is a limit point of a set if and only if is a sequental limit point of that set.    A Cauchy sequence is a countably infinte set such that for all , the set is finite.    A complete metric is a metric such that every Cauchy sequence has a sequential limit point.  A topology that can be generated by a complete metric is said to be completely metrizable .    Every Euclidean space is completely metrizable.    Let be a metric and . Then restricted to generates the subspace topology on . (Therefore, every subspace of a metrizable space is metrizable.)    The subspace of the Euclidean line is completely metrizable, but not by the topology inherited from .    The subspace of the Euclidean line is metrizable, but not completely metrizable.    The subspace of the Euclidean line is completely metrizable, but not by the topology inherited from .    Metrizable and completely metrizable are topological properties. That is, if and are homeomorphic, then is (completely) metrizable if and only if is too.   "
},
{
  "id": "definition-31",
  "level": "2",
  "url": "section-metric.html#definition-31",
  "type": "Definition",
  "number": "5.1",
  "title": "",
  "body": " Let be a function satisfying the following for all .   if and only if .     Then is said to be a metric on the set , and is said to be a metric ball around .  "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "section-metric.html#exercise-15",
  "type": "Checkpoint",
  "number": "5.2",
  "title": "Examples of metrics.",
  "body": "Examples of metrics Verify that each of the following is a metric.  for all distinct , and  for all   for all .   for all .   for all .  "
},
{
  "id": "metric-basis",
  "level": "2",
  "url": "section-metric.html#metric-basis",
  "type": "Theorem",
  "number": "5.3",
  "title": "",
  "body": " Let be a metric on a set . Then is a basis for a topology on .  "
},
{
  "id": "definition-32",
  "level": "2",
  "url": "section-metric.html#definition-32",
  "type": "Definition",
  "number": "5.4",
  "title": "",
  "body": " The topology generated by the basis given in is called the topology generated by the metric .  A given topology is said to be metrizable if there exists some metric that generates it. Two metrics are said to be topologically equivalent if they generate the same topology.  "
},
{
  "id": "proposition-30",
  "level": "2",
  "url": "section-metric.html#proposition-30",
  "type": "Proposition",
  "number": "5.5",
  "title": "",
  "body": " Every discrete space is metrizable.  "
},
{
  "id": "theorem-24",
  "level": "2",
  "url": "section-metric.html#theorem-24",
  "type": "Theorem",
  "number": "5.6",
  "title": "",
  "body": " Every metrizable space is .  "
},
{
  "id": "theorem-25",
  "level": "2",
  "url": "section-metric.html#theorem-25",
  "type": "Theorem",
  "number": "5.7",
  "title": "",
  "body": " Let be the metric balls around given by two metrics respectively. Then are topologically equivalent if and only if for all and , there exists such that and .  "
},
{
  "id": "definition-33",
  "level": "2",
  "url": "section-metric.html#definition-33",
  "type": "Definition",
  "number": "5.8",
  "title": "",
  "body": " For , let .  "
},
{
  "id": "euclidean-metrics",
  "level": "2",
  "url": "section-metric.html#euclidean-metrics",
  "type": "Theorem",
  "number": "5.9",
  "title": "",
  "body": " The following metrics on are topologically equivalent.             "
},
{
  "id": "euclidean-metric-topology",
  "level": "2",
  "url": "section-metric.html#euclidean-metric-topology",
  "type": "Definition",
  "number": "5.10",
  "title": "",
  "body": " The topology generated by the metrics given in is called the Euclidean topology on .  "
},
{
  "id": "proposition-31",
  "level": "2",
  "url": "section-metric.html#proposition-31",
  "type": "Proposition",
  "number": "5.11",
  "title": "",
  "body": " The Euclidean topology defined for in is the same as the Euclidean topology given for in .  "
},
{
  "id": "definition-35",
  "level": "2",
  "url": "section-metric.html#definition-35",
  "type": "Definition",
  "number": "5.12",
  "title": "",
  "body": " A local basis at a point is a collection of open sets such that for every neighborhood of , there exists such that .  "
},
{
  "id": "definition-36",
  "level": "2",
  "url": "section-metric.html#definition-36",
  "type": "Definition",
  "number": "5.13",
  "title": "",
  "body": " A space is said to have local countable weight (or be first-countable ) if there exists a countable local basis at every point of the space.  "
},
{
  "id": "proposition-32",
  "level": "2",
  "url": "section-metric.html#proposition-32",
  "type": "Proposition",
  "number": "5.14",
  "title": "",
  "body": " Every space of countable weight has local countable weight.  "
},
{
  "id": "proposition-33",
  "level": "2",
  "url": "section-metric.html#proposition-33",
  "type": "Proposition",
  "number": "5.15",
  "title": "",
  "body": " Every metrizable space has local countable weight  "
},
{
  "id": "theorem-27",
  "level": "2",
  "url": "section-metric.html#theorem-27",
  "type": "Theorem",
  "number": "5.16",
  "title": "",
  "body": " Let be metrizable. Then has countable weight if and only if it has countable density.  "
},
{
  "id": "proposition-34",
  "level": "2",
  "url": "section-metric.html#proposition-34",
  "type": "Proposition",
  "number": "5.17",
  "title": "",
  "body": " Every space with the Euclidean topology has countable weight and density.  "
},
{
  "id": "nonseparable-metric",
  "level": "2",
  "url": "section-metric.html#nonseparable-metric",
  "type": "Theorem",
  "number": "5.18",
  "title": "",
  "body": " For , let if , and otherwise. Then is a metric generating a non-discrete topology on with uncountable weight and uncountable density.  "
},
{
  "id": "theorem-29",
  "level": "2",
  "url": "section-metric.html#theorem-29",
  "type": "Theorem",
  "number": "5.19",
  "title": "",
  "body": " The subspace of the space defined in is homeomorphic to the subspace of the Euclidean line.  "
},
{
  "id": "definition-37",
  "level": "2",
  "url": "section-metric.html#definition-37",
  "type": "Definition",
  "number": "5.20",
  "title": "",
  "body": " A point is called a sequential limit point of a set iff there exists a countable subset such that every neighborhood of contains all but finitely many points of .  "
},
{
  "id": "proposition-35",
  "level": "2",
  "url": "section-metric.html#proposition-35",
  "type": "Proposition",
  "number": "5.21",
  "title": "",
  "body": " Every sequential limit point of a set is a limit point of that set.  "
},
{
  "id": "theorem-30",
  "level": "2",
  "url": "section-metric.html#theorem-30",
  "type": "Theorem",
  "number": "5.22",
  "title": "",
  "body": " Let have local countable weight. Then is a limit point of a set if and only if is a sequental limit point of that set.  "
},
{
  "id": "definition-38",
  "level": "2",
  "url": "section-metric.html#definition-38",
  "type": "Definition",
  "number": "5.23",
  "title": "",
  "body": " A Cauchy sequence is a countably infinte set such that for all , the set is finite.  "
},
{
  "id": "definition-39",
  "level": "2",
  "url": "section-metric.html#definition-39",
  "type": "Definition",
  "number": "5.24",
  "title": "",
  "body": " A complete metric is a metric such that every Cauchy sequence has a sequential limit point.  A topology that can be generated by a complete metric is said to be completely metrizable .  "
},
{
  "id": "proposition-36",
  "level": "2",
  "url": "section-metric.html#proposition-36",
  "type": "Proposition",
  "number": "5.25",
  "title": "",
  "body": " Every Euclidean space is completely metrizable.  "
},
{
  "id": "proposition-37",
  "level": "2",
  "url": "section-metric.html#proposition-37",
  "type": "Proposition",
  "number": "5.26",
  "title": "",
  "body": " Let be a metric and . Then restricted to generates the subspace topology on . (Therefore, every subspace of a metrizable space is metrizable.)  "
},
{
  "id": "theorem-31",
  "level": "2",
  "url": "section-metric.html#theorem-31",
  "type": "Theorem",
  "number": "5.27",
  "title": "",
  "body": " The subspace of the Euclidean line is completely metrizable, but not by the topology inherited from .  "
},
{
  "id": "theorem-32",
  "level": "2",
  "url": "section-metric.html#theorem-32",
  "type": "Theorem",
  "number": "5.28",
  "title": "",
  "body": " The subspace of the Euclidean line is metrizable, but not completely metrizable.  "
},
{
  "id": "theorem-33",
  "level": "2",
  "url": "section-metric.html#theorem-33",
  "type": "Theorem",
  "number": "5.29",
  "title": "",
  "body": " The subspace of the Euclidean line is completely metrizable, but not by the topology inherited from .  "
},
{
  "id": "theorem-34",
  "level": "2",
  "url": "section-metric.html#theorem-34",
  "type": "Theorem",
  "number": "5.30",
  "title": "",
  "body": " Metrizable and completely metrizable are topological properties. That is, if and are homeomorphic, then is (completely) metrizable if and only if is too.  "
},
{
  "id": "section-compact",
  "level": "1",
  "url": "section-compact.html",
  "type": "Section",
  "number": "6",
  "title": "Compactness",
  "body": " Compactness   A collection is said to cover a subset iff .    A subset of a topological space is said to be compact iff for every collection of open sets covering , there exists a finite subcollection that also covers .   Determine if each of the following subsets of the Euclidean line is compact.         A subset of a space with metric is said to be bounded iff there exists some with for all .    Every compact subset of a Hausdorff space is closed.    Let be the cofinite topology on . Every subset of is compact under this topology.    For every subset with the Euclidean metric, is compact if and only if it is closed and bounded.    A subset of a topological space is said to be relatively compact iff for every collection of open sets covering , there exists a finite subcollection that covers .    Let be regular. A subset is relatively compact if and only if is compact.    For every subset with the Euclidean topology, is relatively compact if and only if it is bounded.    Let be compact and be a closed subset of . Then is compact.    Every finite subset of a space is compact.    Every finite union of compact subsets is compact.    Let be continuous and be compact. Then is compact.    Compactness is a topological property.    Every infinite subset of a compact set has a limit point.    Let be a collection of non-empty compact subsets of a topological space such that for all . Then is a non-empty compact set.    Let be metrizable. Then the following are equivalent for .   is compact  Every infinite subset of has a limit point.  Every infinite subset of has a sequential limit point.     A topological space is Hausdorff if and only if for every pair of disjoint compact subsets there exist disjoint open sets such that and .    Every compact Hausdorff space is .    "
},
{
  "id": "definition-40",
  "level": "2",
  "url": "section-compact.html#definition-40",
  "type": "Definition",
  "number": "6.1",
  "title": "",
  "body": " A collection is said to cover a subset iff .  "
},
{
  "id": "definition-41",
  "level": "2",
  "url": "section-compact.html#definition-41",
  "type": "Definition",
  "number": "6.2",
  "title": "",
  "body": " A subset of a topological space is said to be compact iff for every collection of open sets covering , there exists a finite subcollection that also covers .  "
},
{
  "id": "compact-examples",
  "level": "2",
  "url": "section-compact.html#compact-examples",
  "type": "Checkpoint",
  "number": "6.3",
  "title": "",
  "body": "Determine if each of the following subsets of the Euclidean line is compact.       "
},
{
  "id": "definition-42",
  "level": "2",
  "url": "section-compact.html#definition-42",
  "type": "Definition",
  "number": "6.4",
  "title": "",
  "body": " A subset of a space with metric is said to be bounded iff there exists some with for all .  "
},
{
  "id": "theorem-35",
  "level": "2",
  "url": "section-compact.html#theorem-35",
  "type": "Theorem",
  "number": "6.5",
  "title": "",
  "body": " Every compact subset of a Hausdorff space is closed.  "
},
{
  "id": "proposition-38",
  "level": "2",
  "url": "section-compact.html#proposition-38",
  "type": "Proposition",
  "number": "6.6",
  "title": "",
  "body": " Let be the cofinite topology on . Every subset of is compact under this topology.  "
},
{
  "id": "theorem-36",
  "level": "2",
  "url": "section-compact.html#theorem-36",
  "type": "Theorem",
  "number": "6.7",
  "title": "",
  "body": " For every subset with the Euclidean metric, is compact if and only if it is closed and bounded.  "
},
{
  "id": "definition-43",
  "level": "2",
  "url": "section-compact.html#definition-43",
  "type": "Definition",
  "number": "6.8",
  "title": "",
  "body": " A subset of a topological space is said to be relatively compact iff for every collection of open sets covering , there exists a finite subcollection that covers .  "
},
{
  "id": "theorem-37",
  "level": "2",
  "url": "section-compact.html#theorem-37",
  "type": "Theorem",
  "number": "6.9",
  "title": "",
  "body": " Let be regular. A subset is relatively compact if and only if is compact.  "
},
{
  "id": "corollary-3",
  "level": "2",
  "url": "section-compact.html#corollary-3",
  "type": "Corollary",
  "number": "6.10",
  "title": "",
  "body": " For every subset with the Euclidean topology, is relatively compact if and only if it is bounded.  "
},
{
  "id": "theorem-38",
  "level": "2",
  "url": "section-compact.html#theorem-38",
  "type": "Theorem",
  "number": "6.11",
  "title": "",
  "body": " Let be compact and be a closed subset of . Then is compact.  "
},
{
  "id": "proposition-39",
  "level": "2",
  "url": "section-compact.html#proposition-39",
  "type": "Proposition",
  "number": "6.12",
  "title": "",
  "body": " Every finite subset of a space is compact.  "
},
{
  "id": "proposition-40",
  "level": "2",
  "url": "section-compact.html#proposition-40",
  "type": "Proposition",
  "number": "6.13",
  "title": "",
  "body": " Every finite union of compact subsets is compact.  "
},
{
  "id": "theorem-39",
  "level": "2",
  "url": "section-compact.html#theorem-39",
  "type": "Theorem",
  "number": "6.14",
  "title": "",
  "body": " Let be continuous and be compact. Then is compact.  "
},
{
  "id": "corollary-4",
  "level": "2",
  "url": "section-compact.html#corollary-4",
  "type": "Corollary",
  "number": "6.15",
  "title": "",
  "body": " Compactness is a topological property.  "
},
{
  "id": "theorem-40",
  "level": "2",
  "url": "section-compact.html#theorem-40",
  "type": "Theorem",
  "number": "6.16",
  "title": "",
  "body": " Every infinite subset of a compact set has a limit point.  "
},
{
  "id": "theorem-41",
  "level": "2",
  "url": "section-compact.html#theorem-41",
  "type": "Theorem",
  "number": "6.17",
  "title": "",
  "body": " Let be a collection of non-empty compact subsets of a topological space such that for all . Then is a non-empty compact set.  "
},
{
  "id": "theorem-42",
  "level": "2",
  "url": "section-compact.html#theorem-42",
  "type": "Theorem",
  "number": "6.18",
  "title": "",
  "body": " Let be metrizable. Then the following are equivalent for .   is compact  Every infinite subset of has a limit point.  Every infinite subset of has a sequential limit point.   "
},
{
  "id": "lemma-1",
  "level": "2",
  "url": "section-compact.html#lemma-1",
  "type": "Lemma",
  "number": "6.19",
  "title": "",
  "body": " A topological space is Hausdorff if and only if for every pair of disjoint compact subsets there exist disjoint open sets such that and .  "
},
{
  "id": "theorem-43",
  "level": "2",
  "url": "section-compact.html#theorem-43",
  "type": "Theorem",
  "number": "6.20",
  "title": "",
  "body": " Every compact Hausdorff space is .  "
},
{
  "id": "section-connected",
  "level": "1",
  "url": "section-connected.html",
  "type": "Section",
  "number": "7",
  "title": "Connectedness",
  "body": " Connectedness   Let be a subset of a topological space . A pair of open sets satisfying , , , and is called a disconnection of .  A subset of a space for which a disconnection exists is called disconnected ; otherwise, the space is called connected .    A set which is both closed and open is said to be clopen .    A pair of open sets is a disconnection of if and only if is a partition of by non-empty clopen sets in the subspace topology.    A space itself is disconnected if and only if it is the union of two disjoint non-empty clopen subsets.    The Euclidean line with a point removed is disconnected.    Let for open sets and let with . Then .    The Euclidean line is connected.    The Sorgenfrey topology on is disconnected.    If a subset of a topological space is connected, then is connected.    If a subset of a topological space is connected and is continuous, then is connected.    Connectedness is a topological property.    Let have the discrete topology. Then a topological space is connected if and only if every continuous function is constant.    If is a collection of connected subsets of a topological space with , then is connected.    Suppose for every two points , there exists a continuous function such that and . Such a space is said to be path connected .    Every path connected space is connected.   Find or create an example of a connected space that's not path connected.   Let (the topologist's sine curve ). Then is a subset of the Euclidean space that is connected but not path connected.   "
},
{
  "id": "definition-44",
  "level": "2",
  "url": "section-connected.html#definition-44",
  "type": "Definition",
  "number": "7.1",
  "title": "",
  "body": " Let be a subset of a topological space . A pair of open sets satisfying , , , and is called a disconnection of .  A subset of a space for which a disconnection exists is called disconnected ; otherwise, the space is called connected .  "
},
{
  "id": "definition-45",
  "level": "2",
  "url": "section-connected.html#definition-45",
  "type": "Definition",
  "number": "7.2",
  "title": "",
  "body": " A set which is both closed and open is said to be clopen .  "
},
{
  "id": "proposition-41",
  "level": "2",
  "url": "section-connected.html#proposition-41",
  "type": "Proposition",
  "number": "7.3",
  "title": "",
  "body": " A pair of open sets is a disconnection of if and only if is a partition of by non-empty clopen sets in the subspace topology.  "
},
{
  "id": "corollary-5",
  "level": "2",
  "url": "section-connected.html#corollary-5",
  "type": "Corollary",
  "number": "7.4",
  "title": "",
  "body": " A space itself is disconnected if and only if it is the union of two disjoint non-empty clopen subsets.  "
},
{
  "id": "proposition-42",
  "level": "2",
  "url": "section-connected.html#proposition-42",
  "type": "Proposition",
  "number": "7.5",
  "title": "",
  "body": " The Euclidean line with a point removed is disconnected.  "
},
{
  "id": "lemma-2",
  "level": "2",
  "url": "section-connected.html#lemma-2",
  "type": "Lemma",
  "number": "7.6",
  "title": "",
  "body": " Let for open sets and let with . Then .  "
},
{
  "id": "corollary-6",
  "level": "2",
  "url": "section-connected.html#corollary-6",
  "type": "Corollary",
  "number": "7.7",
  "title": "",
  "body": " The Euclidean line is connected.  "
},
{
  "id": "proposition-43",
  "level": "2",
  "url": "section-connected.html#proposition-43",
  "type": "Proposition",
  "number": "7.8",
  "title": "",
  "body": " The Sorgenfrey topology on is disconnected.  "
},
{
  "id": "theorem-44",
  "level": "2",
  "url": "section-connected.html#theorem-44",
  "type": "Theorem",
  "number": "7.9",
  "title": "",
  "body": " If a subset of a topological space is connected, then is connected.  "
},
{
  "id": "proposition-44",
  "level": "2",
  "url": "section-connected.html#proposition-44",
  "type": "Proposition",
  "number": "7.10",
  "title": "",
  "body": " If a subset of a topological space is connected and is continuous, then is connected.  "
},
{
  "id": "corollary-7",
  "level": "2",
  "url": "section-connected.html#corollary-7",
  "type": "Corollary",
  "number": "7.11",
  "title": "",
  "body": " Connectedness is a topological property.  "
},
{
  "id": "proposition-45",
  "level": "2",
  "url": "section-connected.html#proposition-45",
  "type": "Proposition",
  "number": "7.12",
  "title": "",
  "body": " Let have the discrete topology. Then a topological space is connected if and only if every continuous function is constant.  "
},
{
  "id": "theorem-45",
  "level": "2",
  "url": "section-connected.html#theorem-45",
  "type": "Theorem",
  "number": "7.13",
  "title": "",
  "body": " If is a collection of connected subsets of a topological space with , then is connected.  "
},
{
  "id": "definition-46",
  "level": "2",
  "url": "section-connected.html#definition-46",
  "type": "Definition",
  "number": "7.14",
  "title": "",
  "body": " Suppose for every two points , there exists a continuous function such that and . Such a space is said to be path connected .  "
},
{
  "id": "proposition-46",
  "level": "2",
  "url": "section-connected.html#proposition-46",
  "type": "Proposition",
  "number": "7.15",
  "title": "",
  "body": " Every path connected space is connected.  "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "section-connected.html#exercise-17",
  "type": "Checkpoint",
  "number": "7.16",
  "title": "",
  "body": "Find or create an example of a connected space that's not path connected. "
},
{
  "id": "theorem-46",
  "level": "2",
  "url": "section-connected.html#theorem-46",
  "type": "Theorem",
  "number": "7.17",
  "title": "",
  "body": " Let (the topologist's sine curve ). Then is a subset of the Euclidean space that is connected but not path connected.  "
},
{
  "id": "section-product",
  "level": "1",
  "url": "section-product.html",
  "type": "Section",
  "number": "8",
  "title": "Product Spaces",
  "body": " Product Spaces   Let be topological spaces, generated respectively by the bases . Then the product space is given by the set with the topology generated by the basis .    The product spaces and are homeomorphic.    Let . The subspace of is homeomorphic to .    The Euclidean space as defined in is homeomorphic to the product space .    The product is Hausdorff if and only if are each Hausdorff.    The product is regular if and only if are each regular.    Let equipped with the Sorgenfrey topology. Then the product space contains two disjoint closed subsets and that cannot be separated by a pair of open sets.    Let equipped with the Sorgenfrey topology. Then is normal, but is not normal.    The diagonal  of is homeomorphic to .    For a product space , its projection maps  and are defined by and .   Properties of projection maps Verify the following properties of projection maps.  Every projection map is continuous.  The projection of an open set is always open.  The projection of a closed set is not always closed.    The product is metrizable if and only if are each metrizable.    Let be compact. If is an open cover of , then for each there exists a finite subcollection and an open neighborhood of such that .    The product is compact if and only if are each compact.    The product is connected if and only if are each connected.   "
},
{
  "id": "definition-47",
  "level": "2",
  "url": "section-product.html#definition-47",
  "type": "Definition",
  "number": "8.1",
  "title": "",
  "body": " Let be topological spaces, generated respectively by the bases . Then the product space is given by the set with the topology generated by the basis .  "
},
{
  "id": "proposition-47",
  "level": "2",
  "url": "section-product.html#proposition-47",
  "type": "Proposition",
  "number": "8.2",
  "title": "",
  "body": " The product spaces and are homeomorphic.  "
},
{
  "id": "proposition-48",
  "level": "2",
  "url": "section-product.html#proposition-48",
  "type": "Proposition",
  "number": "8.3",
  "title": "",
  "body": " Let . The subspace of is homeomorphic to .  "
},
{
  "id": "theorem-47",
  "level": "2",
  "url": "section-product.html#theorem-47",
  "type": "Theorem",
  "number": "8.4",
  "title": "",
  "body": " The Euclidean space as defined in is homeomorphic to the product space .  "
},
{
  "id": "proposition-49",
  "level": "2",
  "url": "section-product.html#proposition-49",
  "type": "Proposition",
  "number": "8.5",
  "title": "",
  "body": " The product is Hausdorff if and only if are each Hausdorff.  "
},
{
  "id": "theorem-48",
  "level": "2",
  "url": "section-product.html#theorem-48",
  "type": "Theorem",
  "number": "8.6",
  "title": "",
  "body": " The product is regular if and only if are each regular.  "
},
{
  "id": "lemma-3",
  "level": "2",
  "url": "section-product.html#lemma-3",
  "type": "Lemma",
  "number": "8.7",
  "title": "",
  "body": " Let equipped with the Sorgenfrey topology. Then the product space contains two disjoint closed subsets and that cannot be separated by a pair of open sets.  "
},
{
  "id": "theorem-49",
  "level": "2",
  "url": "section-product.html#theorem-49",
  "type": "Theorem",
  "number": "8.8",
  "title": "",
  "body": " Let equipped with the Sorgenfrey topology. Then is normal, but is not normal.  "
},
{
  "id": "proposition-50",
  "level": "2",
  "url": "section-product.html#proposition-50",
  "type": "Proposition",
  "number": "8.9",
  "title": "",
  "body": " The diagonal  of is homeomorphic to .  "
},
{
  "id": "definition-48",
  "level": "2",
  "url": "section-product.html#definition-48",
  "type": "Definition",
  "number": "8.10",
  "title": "",
  "body": " For a product space , its projection maps  and are defined by and .  "
},
{
  "id": "exercise-18",
  "level": "2",
  "url": "section-product.html#exercise-18",
  "type": "Checkpoint",
  "number": "8.11",
  "title": "Properties of projection maps.",
  "body": "Properties of projection maps Verify the following properties of projection maps.  Every projection map is continuous.  The projection of an open set is always open.  The projection of a closed set is not always closed.  "
},
{
  "id": "theorem-50",
  "level": "2",
  "url": "section-product.html#theorem-50",
  "type": "Theorem",
  "number": "8.12",
  "title": "",
  "body": " The product is metrizable if and only if are each metrizable.  "
},
{
  "id": "lemma-4",
  "level": "2",
  "url": "section-product.html#lemma-4",
  "type": "Lemma",
  "number": "8.13",
  "title": "",
  "body": " Let be compact. If is an open cover of , then for each there exists a finite subcollection and an open neighborhood of such that .  "
},
{
  "id": "theorem-51",
  "level": "2",
  "url": "section-product.html#theorem-51",
  "type": "Theorem",
  "number": "8.14",
  "title": "",
  "body": " The product is compact if and only if are each compact.  "
},
{
  "id": "theorem-52",
  "level": "2",
  "url": "section-product.html#theorem-52",
  "type": "Theorem",
  "number": "8.15",
  "title": "",
  "body": " The product is connected if and only if are each connected.  "
},
{
  "id": "section-quotient",
  "level": "1",
  "url": "section-quotient.html",
  "type": "Section",
  "number": "9",
  "title": "Quotient Spaces",
  "body": " Quotient Spaces   Let be a partition of a space with topology . Then the set defines a topology on .    The topology defined in is called the quotent topology , and is called a quotient space or identification space .    Let partition the product . Then the quotient space is homeomorphic to .    A subset is called a relation on , where the notation is equivalent to writing .  A relation on is called an equivalence relation if it satisfies the following for all .   . (Reflexivity)  implies . (Symmetry)  and implies . (Transitivity)     Let be a partition of and define the relation on such that if and only if for some . Then is an equivalence relation.    Let be an equivalence relation on , and let . Then is a partition of .    Let be an equivalence relation on a topological space . Then denotes the quotient space defined by the partition given in .    Let be a relation on . Then is an equivalence relation on .  (Therefore, an equivalence relation may be defined as the minimal equivalence relation satisfying a list of relationships.)    Define the equivalence relation on by . Then the quotient space is homeomorphic to .   Curves and surfaces defined as quotients Show that each of the following Euclidean subspaces and quotients of Euclidean subspaces are homeomorphic.  where , and .   where , and .   where , and .   where whenever at least one of and at least one of is in , and .    The hypersphere of dimension is the quotient space given by whenever there exist such that .    The Möbius strip is the quotient space given by .    The torus is the quotient space given by and .    The Klein bottle is the quotient space given by and .   "
},
{
  "id": "quotient-topology",
  "level": "2",
  "url": "section-quotient.html#quotient-topology",
  "type": "Theorem",
  "number": "9.1",
  "title": "",
  "body": " Let be a partition of a space with topology . Then the set defines a topology on .  "
},
{
  "id": "definition-49",
  "level": "2",
  "url": "section-quotient.html#definition-49",
  "type": "Definition",
  "number": "9.2",
  "title": "",
  "body": " The topology defined in is called the quotent topology , and is called a quotient space or identification space .  "
},
{
  "id": "theorem-54",
  "level": "2",
  "url": "section-quotient.html#theorem-54",
  "type": "Theorem",
  "number": "9.3",
  "title": "",
  "body": " Let partition the product . Then the quotient space is homeomorphic to .  "
},
{
  "id": "definition-50",
  "level": "2",
  "url": "section-quotient.html#definition-50",
  "type": "Definition",
  "number": "9.4",
  "title": "",
  "body": " A subset is called a relation on , where the notation is equivalent to writing .  A relation on is called an equivalence relation if it satisfies the following for all .   . (Reflexivity)  implies . (Symmetry)  and implies . (Transitivity)   "
},
{
  "id": "proposition-51",
  "level": "2",
  "url": "section-quotient.html#proposition-51",
  "type": "Proposition",
  "number": "9.5",
  "title": "",
  "body": " Let be a partition of and define the relation on such that if and only if for some . Then is an equivalence relation.  "
},
{
  "id": "equivalence-partition",
  "level": "2",
  "url": "section-quotient.html#equivalence-partition",
  "type": "Theorem",
  "number": "9.6",
  "title": "",
  "body": " Let be an equivalence relation on , and let . Then is a partition of .  "
},
{
  "id": "definition-51",
  "level": "2",
  "url": "section-quotient.html#definition-51",
  "type": "Definition",
  "number": "9.7",
  "title": "",
  "body": " Let be an equivalence relation on a topological space . Then denotes the quotient space defined by the partition given in .  "
},
{
  "id": "proposition-52",
  "level": "2",
  "url": "section-quotient.html#proposition-52",
  "type": "Proposition",
  "number": "9.8",
  "title": "",
  "body": " Let be a relation on . Then is an equivalence relation on .  (Therefore, an equivalence relation may be defined as the minimal equivalence relation satisfying a list of relationships.)  "
},
{
  "id": "proposition-53",
  "level": "2",
  "url": "section-quotient.html#proposition-53",
  "type": "Proposition",
  "number": "9.9",
  "title": "",
  "body": " Define the equivalence relation on by . Then the quotient space is homeomorphic to .  "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "section-quotient.html#exercise-19",
  "type": "Checkpoint",
  "number": "9.10",
  "title": "Curves and surfaces defined as quotients.",
  "body": "Curves and surfaces defined as quotients Show that each of the following Euclidean subspaces and quotients of Euclidean subspaces are homeomorphic.  where , and .   where , and .   where , and .   where whenever at least one of and at least one of is in , and .  "
},
{
  "id": "definition-52",
  "level": "2",
  "url": "section-quotient.html#definition-52",
  "type": "Definition",
  "number": "9.11",
  "title": "",
  "body": " The hypersphere of dimension is the quotient space given by whenever there exist such that .  "
},
{
  "id": "definition-53",
  "level": "2",
  "url": "section-quotient.html#definition-53",
  "type": "Definition",
  "number": "9.12",
  "title": "",
  "body": " The Möbius strip is the quotient space given by .  "
},
{
  "id": "definition-54",
  "level": "2",
  "url": "section-quotient.html#definition-54",
  "type": "Definition",
  "number": "9.13",
  "title": "",
  "body": " The torus is the quotient space given by and .  "
},
{
  "id": "definition-55",
  "level": "2",
  "url": "section-quotient.html#definition-55",
  "type": "Definition",
  "number": "9.14",
  "title": "",
  "body": " The Klein bottle is the quotient space given by and .  "
},
{
  "id": "assumed",
  "level": "1",
  "url": "assumed.html",
  "type": "Appendix",
  "number": "A",
  "title": "Assumptions",
  "body": " Assumptions   Here is a brief overview of basic results and definitions concerning sets and the reals that should be assumed for this course.     is the set of real numbers.  is the set of integers.   is the set of natural numbers, which includes zero.   is the set of rational numbers.      De Morgan's Laws : Let be a collection of subsets of .      The Archemedian Property of the real numbers guarantees that for each positive real number , there exists a natural number such that .    Let be a set of real numbers with a lower bound. Then there exists a greatest lower bound (a.k.a. infimum ) .  Let be a set of real numbers with a lower bound. Then there exists a least upper bound (a.k.a. supremum ) .    The cardinality of a finite set is the natural number that is equal to the number of elements it contains. For example, has cardinality .  A set that has an injection with is said to be countable and have cardinality . If a bijection exists, the set is countably infinite and has cardinality .  A set that has no injection with is said to be uncountable and have cardinality .  A set that has a bijection with is said to be continuum-sized and have cardinality .    For each , the set is infinite and countable, and the set is infinite and uncoutnable. In particular, every subinterval of contains a rational from and an irrational from .    For any functions and , .   "
},
{
  "id": "definition-56",
  "level": "2",
  "url": "assumed.html#definition-56",
  "type": "Definition",
  "number": "A.1",
  "title": "",
  "body": "  is the set of real numbers.  is the set of integers.   is the set of natural numbers, which includes zero.   is the set of rational numbers.   "
},
{
  "id": "theorem-56",
  "level": "2",
  "url": "assumed.html#theorem-56",
  "type": "Theorem",
  "number": "A.2",
  "title": "",
  "body": "  De Morgan's Laws : Let be a collection of subsets of .    "
},
{
  "id": "theorem-57",
  "level": "2",
  "url": "assumed.html#theorem-57",
  "type": "Theorem",
  "number": "A.3",
  "title": "",
  "body": " The Archemedian Property of the real numbers guarantees that for each positive real number , there exists a natural number such that .  "
},
{
  "id": "theorem-58",
  "level": "2",
  "url": "assumed.html#theorem-58",
  "type": "Theorem",
  "number": "A.4",
  "title": "",
  "body": " Let be a set of real numbers with a lower bound. Then there exists a greatest lower bound (a.k.a. infimum ) .  Let be a set of real numbers with a lower bound. Then there exists a least upper bound (a.k.a. supremum ) .  "
},
{
  "id": "definition-57",
  "level": "2",
  "url": "assumed.html#definition-57",
  "type": "Definition",
  "number": "A.5",
  "title": "",
  "body": " The cardinality of a finite set is the natural number that is equal to the number of elements it contains. For example, has cardinality .  A set that has an injection with is said to be countable and have cardinality . If a bijection exists, the set is countably infinite and has cardinality .  A set that has no injection with is said to be uncountable and have cardinality .  A set that has a bijection with is said to be continuum-sized and have cardinality .  "
},
{
  "id": "lemma-5",
  "level": "2",
  "url": "assumed.html#lemma-5",
  "type": "Lemma",
  "number": "A.6",
  "title": "",
  "body": " For each , the set is infinite and countable, and the set is infinite and uncoutnable. In particular, every subinterval of contains a rational from and an irrational from .  "
},
{
  "id": "lemma-6",
  "level": "2",
  "url": "assumed.html#lemma-6",
  "type": "Lemma",
  "number": "A.7",
  "title": "",
  "body": " For any functions and , .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
